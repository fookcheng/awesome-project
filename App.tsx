import React from 'react';
import { Button, Text, View } from 'react-native';
import axios from 'axios';
import * as protobuf from 'protobufjs';
import authJson from '@snsoft/auth-grpc-json';

const HelloWorldApp = () => {
  function frameGrpcWebMessage(messageBuffer: Uint8Array): Uint8Array {
    const frame = new Uint8Array(messageBuffer.length + 5);
    frame[0] = 0; // no compression
    frame[1] = (messageBuffer.length >> 24) & 0xff;
    frame[2] = (messageBuffer.length >> 16) & 0xff;
    frame[3] = (messageBuffer.length >> 8) & 0xff;
    frame[4] = messageBuffer.length & 0xff;
    frame.set(messageBuffer, 5); // copy message into frame
    return frame;
  }

  function decodeGrpcWebResponseMessage(responseData: any, responseType: any) {
    const raw = new Uint8Array(responseData);
    const isTrailer = raw[0] === 0x80;
    if (!isTrailer) {
      const messageLength = (raw[1] << 24) | (raw[2] << 16) | (raw[3] << 8) | raw[4];
      const message = raw.slice(5, 5 + messageLength);
      const decoded = responseType.decode(message) as any;
      console.log('✅ Decoded:', decoded);
      console.log('decoded.data: ', decoded.data);
      console.log('decoded.token: ', decoded.token);

      return decoded;
    } else {
      console.warn('🚧 Received trailer instead of data');
    }

    return undefined;
  }

  async function realisticExample() {
    try {
      console.log('before protobuf calling');

      const root = protobuf.Root.fromJSON(authJson as any);
      const PlayerLoginWithPasswordReq = root.lookupType('auth.PlayerLoginWithPasswordReq');
      const PlayerLoginWithPasswordRes = root.lookupType('auth.PlayerLoginWithPasswordRes');

      // Create request message
      const reqPayload = PlayerLoginWithPasswordReq.create({
        phone: "639212345679",
        password: "1234",
        platformId: "50",
        sourceUrl: "https://react.client8.me",
        clientDomain: "https://react.client8.me",
        eId: "8f14e45fceea167a5a36dedd4bea2543"
      });

      // Encode to binary
      const buffer = PlayerLoginWithPasswordReq.encode(reqPayload).finish();
      const frame = frameGrpcWebMessage(buffer);
      let response: any;

      try {
        response = await axios.post(
          'https://fpms-nt-public.fpms88.me/auth/auth.AuthService/PlayerLoginWithPassword',
          frame,
          {
            responseType: 'arraybuffer',
            headers: {
              accept: '*/*',
              'accept-language': 'en,en-US;q=0.9',
              'content-type': 'application/grpc-web+proto',
              origin: 'http://localhost:5173',
              priority: 'u=1, i',
              referer: 'http://localhost:5173/',
              'sec-ch-ua':
                '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
              'sec-ch-ua-mobile': '?0',
              'sec-ch-ua-platform': '"macOS"',
              'sec-fetch-dest': 'empty',
              'sec-fetch-mode': 'cors',
              'sec-fetch-site': 'cross-site',
              'user-agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
              'x-grpc-web': '1',
              'x-user-agent': 'connect-es/1.6.1',
            },
          },
        );
      } catch (err) {
        console.error('Error calling endpoint:', err);
      }

      console.log('response: ', response);

      decodeGrpcWebResponseMessage(response.data, PlayerLoginWithPasswordRes);

      console.log('after protobuf calling');
    } catch (err) {
      console.error('🔥 Error before FookTesting call:', err);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'white' }}>
        Call grpc
      </Text>

      <Button title="Realistic example" onPress={realisticExample} />
    </View>
  );
};

export default HelloWorldApp;
