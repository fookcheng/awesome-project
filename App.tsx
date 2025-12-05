import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import axios from 'axios';
import * as protobuf from 'protobufjs';
import authJson from '@snsoft/auth-grpc-json';
import cmsJson from '@snsoft/CMS-grpc-json';
import InAppBrowser from 'react-native-inappbrowser-reborn';

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

  async function realisticExampleCms() {
    try {
      console.log('before protobuf calling');

      const root = protobuf.Root.fromJSON(cmsJson as any);
      const ReadPopupReq = root.lookupType('CMS.ReadPopupReq');
      const ReadPopupRes = root.lookupType('common.BaseResponse');

      // Create request message
      const reqPayload = ReadPopupReq.create({
        popupId: "babipukima",
      });

      // Encode to binary
      const buffer = ReadPopupReq.encode(reqPayload).finish();
      const frame = frameGrpcWebMessage(buffer);
      let response: any;

      try {
        response = await axios.post(
          'https://fpms-nt-public.fpms88.me/cms/CMS.FrontendService/ReadPopup',
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
              'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMTIwNTQ4MTcyNiIsInN1YiI6IjEyMDU0ODE3MjYiLCJwbGF0Zm9ybUlkIjoiNTAiLCJwbGF5ZXJUeXBlIjoxLCJsYXN0VG9rZW5UaW1lIjoiMjAyNS0xMC0wMlQwNDo0NjoxMC44NzJaIiwiaWF0IjoxNzU5MzgwMzcwLCJleHAiOjE3NTk0Mzc5NzB9.P1uvRLWLg1CDRTitmewHwnIbdecH1sG5kngIKyEJ7Po"
            },
          },
        );
      } catch (err) {
        console.error('Error calling endpoint:', err);
      }

      console.log('response: ', response);

      decodeGrpcWebResponseMessage(response.data, ReadPopupRes);

      console.log('after protobuf calling');
    } catch (err) {
      console.error('🔥 Error before FookTesting call:', err);
    }
  }

  async function googleLogin() {
    try {
      console.log('before protobuf calling');

      const root = protobuf.Root.fromJSON(authJson as any);
      const OAuth2Req = root.lookupType('auth.OAuth2Req');
      const OAuth2Res = root.lookupType('auth.OAuth2Res');

      // Create request message
      const reqPayload = OAuth2Req.create({
        code: "code",
        redirectType: 1,
      });

      console.log('reqPayload: ', reqPayload);

      // Encode to binary
      const buffer = OAuth2Req.encode(reqPayload).finish();
      const frame = frameGrpcWebMessage(buffer);
      let response: any;

      try {
        response = await axios.post(
          'https://fpms-nt3.platform88.me/auth/auth.FrontendGoogleService/OAuth2',
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
              "eId": "1234455",
              'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMTIwNTQ4MTcyNiIsInN1YiI6IjEyMDU0ODE3MjYiLCJwbGF0Zm9ybUlkIjoiNTAiLCJwbGF5ZXJUeXBlIjoxLCJsYXN0VG9rZW5UaW1lIjoiMjAyNS0xMC0wMlQwNDo0NjoxMC44NzJaIiwiaWF0IjoxNzU5MzgwMzcwLCJleHAiOjE3NTk0Mzc5NzB9.P1uvRLWLg1CDRTitmewHwnIbdecH1sG5kngIKyEJ7Po"
            },
          },
        );
      } catch (err) {
        console.error('Error calling endpoint:', err);
        return;
      }

      console.log('response: ', response);

      const decodedData = decodeGrpcWebResponseMessage(response.data, OAuth2Res);
      const url = decodedData.data.url;

      console.log('decodedData url: ', url);

      // Extract callback URL from the OAuth URL (redirect_uri parameter)
      // Or use your backend's callback URL
      let callbackUrl = 'https://fpms-nt3-http.platform88.me/auth/google/callbackLogin';
      
      // Try to extract redirect_uri from the OAuth URL if available
      if (url) {
        try {
          const urlObj = new URL(url);
          // Extract redirect_uri from query string
          const redirectUriMatch = url.match(/[?&]redirect_uri=([^&]+)/);
          if (redirectUriMatch && redirectUriMatch[1]) {
            callbackUrl = decodeURIComponent(redirectUriMatch[1]);
            console.log('Extracted callback URL from OAuth URL:', callbackUrl);
          }
        } catch (e) {
          console.log('Using default callback URL:', callbackUrl);
        }
      }
      
      // Open the OAuth URL in InAppBrowser with automatic redirect detection
      if (url && InAppBrowser) {
        try {
          const result = await InAppBrowser.openAuth(url, callbackUrl, {
            // iOS options
            dismissButtonStyle: 'cancel',
            preferredBarTintColor: '#453AA4',
            preferredControlTintColor: 'white',
            readerMode: false,
            animated: true,
            modalPresentationStyle: 'overFullScreen',
            modalTransitionStyle: 'coverVertical',
            // Android options
            showTitle: false,
            toolbarColor: '#6200EE',
            secondaryToolbarColor: 'black',
            enableUrlBarHiding: true,
            enableDefaultShare: false,
            showInRecents: false,
          });

          console.log('result****: ', result);

          // Handle the result
          if (result.type === 'success') {
            console.log('✅ OAuth successful! Callback URL:', result.url);
            // The browser automatically closed when redirect was detected
            // You can extract the authorization code from result.url if needed
          } else if (result.type === 'cancel') {
            console.log('User cancelled OAuth');
          } else if (result.type === 'dismiss') {
            console.log('OAuth browser dismissed');
          }
        } catch (error) {
          console.error('Error opening InAppBrowser:', error);
        }
      }

      console.log('after protobuf calling');
    } catch (err) {
      console.error('🔥 Error in googleLogin:', err);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'white' }}>
        Call grpc
      </Text>

      <Button title="Realistic example" onPress={realisticExample} />
      <Button title="Realistic example cms" onPress={realisticExampleCms} />
      <Button title="Google Login" onPress={googleLogin} />
    </View>
  );
};

export default HelloWorldApp;
