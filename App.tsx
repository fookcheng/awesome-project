import React from 'react';
import { Alert, Button, Text, View } from 'react-native';
import axios from 'axios';
// import * as protobuf from 'protobufjs';
import { decodePageResourceRes, encodePageResourceReq } from './frontend.js';

import * as protobuf from 'protobufjs';
import { writeFileSync } from 'fs';
import player from './player.json';

const HelloWorldApp = () => {
  // async function sendGrpcWebRequest() {
  //   const message = encodePageResourceReq({
  //     resourceId: 'H5_HOME_CAROUSEL_1_fooktesting_fook_testing2',
  //     languageCode: 1,
  //     eId: '1234567890',
  //     partnerId: '1234567890',
  //   });

  //   const messageBuffer = Buffer.from(message);

  //   console.log('message: ', message);

  //   // 2. Frame it for gRPC-Web
  //   const frame = Buffer.alloc(messageBuffer.length + 5);
  //   frame[0] = 0; // No compression
  //   frame.writeUInt32BE(messageBuffer.length, 1); // 4-byte length prefix

  //   console.log('frame: ', frame.toString('hex'));

  //   messageBuffer.copy(frame, 5); // Append protobuf payload

  //   const response = await axios.post(
  //     'https://fpms-nt-public.fpms88.me/cms/CMS.FrontendService/GetPageResource',
  //     frame,
  //     {
  //       responseType: 'arraybuffer',
  //       headers: {
  //         'content-type': 'application/grpc-web+proto',
  //         'x-grpc-web': '1',
  //         reqid: 'fooktesting',
  //         'x-user-agent': 'grpc-web-node',
  //       },
  //     },
  //   );

  //   const raw = new Uint8Array(response.data); // response.data is ArrayBuffer

  //   console.log('🔢 Raw Bytes:', raw);
  //   console.log('📏 Total length:', raw.length);
    
  //   // gRPC-Web: [0]=compression flag, [1-4]=length, [5...]=actual data
  //   const body = raw.slice(5);
    
  //   console.log('🧱 gRPC body (hex):', Buffer.from(body).toString('hex'));
  //   console.log('🧱 gRPC body (base64):', Buffer.from(body).toString('base64'));
  //   console.log('🧱 gRPC body (utf8):', Buffer.from(body).toString('utf8'));

  //   console.log('response: ', decodePageResourceRes(body));
  // }

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

  function extractGrpcWebMessages(data: Uint8Array): Uint8Array[] {
    const messages: Uint8Array[] = [];
    let offset = 0;
  
    while (offset + 5 <= data.length) {
      const frameType = data[offset]; // 0=data, 1=compressed, 128=trailers
      const length = (data[offset + 1] << 24) |
                     (data[offset + 2] << 16) |
                     (data[offset + 3] << 8) |
                     data[offset + 4];
  
      const frameEnd = offset + 5 + length;
      if (frameEnd > data.length) {
        console.warn('❗️Frame exceeds buffer length, aborting');
        break;
      }
  
      const framePayload = data.slice(offset + 5, frameEnd);
  
      // 0 = normal response frame
      if (frameType === 0) {
        messages.push(framePayload);
      }
  
      offset = frameEnd;
    }
  
    return messages;
  }

  async function sendGrpcWebRequest() {
    const root = protobuf.Root.fromJSON(player as any);
    const PlayerLoginWithPasswordReq = root.lookupType('auth.PlayerLoginWithPasswordReq');

    const message = PlayerLoginWithPasswordReq.create({
      phone: '639212345679',
      platformId: '50',
      password: '123456',
    });

    const buffer = PlayerLoginWithPasswordReq.encode(message).finish();
    console.log('buffer: ', buffer);

    const frame = frameGrpcWebMessage(buffer);
    console.log('frame: ', frame);

    const response = await axios.post(
      'https://fpms-nt-public.fpms88.me/auth/auth/AuthService.PlayerLoginWithPassword',
      frame,
      {
        responseType: 'arraybuffer',
        headers: {
          'content-type': 'application/grpc-web+proto',
          'x-grpc-web': '1',
          'reqid': 'fooktesting',
          'x-user-agent': 'grpc-web-node',
        },
      },
    );

    console.log('hello')

    let PlayerLoginWithPasswordRes: any;
    try {
      PlayerLoginWithPasswordRes = root.lookupType('auth.PlayerLoginWithPasswordRes');
      console.log('✅ Lookup success');
    } catch (err) {
      console.error('❌ Failed to lookup message:', err);
    }

    console.log('hello2')
    // console.log('body (hex):', Buffer.from(response.data).toString('hex'));
    // console.log('body (utf8):', Buffer.from(response.data).toString('utf8'));

    const raw = new Uint8Array(response.data);
    const messages = extractGrpcWebMessages(raw);

    
    // ✅ Step 2: decode response
    console.log('hello4', messages)

    const body = messages[0];
    
    console.log('hello4', body)
    let decoded: any;

    try {
      decoded = PlayerLoginWithPasswordRes.decode(body);
      console.log('✅ Decode success');
    } catch (err) {
      console.error('❌ Failed to decode:', err);
    } 

    console.log('hello5')
  
    // ✅ Step 3: convert to JSON object (optional)
    const responseObject = PlayerLoginWithPasswordRes.toObject(decoded, {
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });

    console.log('responseObject6: ', responseObject);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'white' }}>
        Hello Bybeybe 1212121212121
      </Text>
      <Button title="Send gRPC Request" onPress={sendGrpcWebRequest} />
    </View>
  );
};

export default HelloWorldApp;
