import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

export const EmailTemplate = ({ responce }) => (
  <Html>
    <Head />
    <Preview>File Shared With You</Preview>
    <Body style={main}>
      <Container>
        {/* Logo Image */}
        <Section style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
          <Img width={200} src="https://firebasestorage.googleapis.com/v0/b/file-sharing-980d9.appspot.com/o/file-upload%2Flogo1.png?alt=media&token=a0406429-712f-4798-a7dd-c4c58c933f0a" style={logo} />
        </Section>


        {/* Content */}
        <Section style={content}>
          <Row style={{ paddingBottom: '0' }}>
            <Column>
              <Heading
                style={{
                  fontSize: 32,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                Hi {responce?.emailToSend?.split('@')[0]},
              </Heading>
              <Heading
                as="h2"
                style={{
                  fontSize: 26,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}
              >
                {responce?.userName} Share file with you
              </Heading>

              <Text style={paragraph}>
                <b>File Name: {responce.fileName}</b>
              </Text>
              <Text style={{ marginTop: -5 }}>
                <b>File Size: {(responce.fileSize / 1024 / 1024).toFixed(2)}</b>
              </Text>
              <Text style={{ marginTop: -5 }}>
                <b>File Type: {responce.fileType}</b>
              </Text>
              <Text
                style={{
                  color: 'rgb(0,0,0, 0.5)',
                  fontSize: 14,
                  marginTop: -5,
                }}
              >
                *Access and Download file on your own risk
              </Text>

              <Text style={paragraph}>
                Now You can also share file with FileSharo App
              </Text>
              <Text style={{ marginTop: -5 }}>
                Click Below Button to Access your file
              </Text>
            </Column>
          </Row>

          {/* Download Button */}
          <Row style={{ paddingTop: '0' }}>
            <Column style={containerButton} colSpan={2}>
              <Button style={button} href={responce?.shortUrl}>
                Click here to Download
              </Button>
            </Column>
          </Row>
        </Section>

        {/* Footer */}
        <Section style={containerImageFooter}>
          <Img
            width={620}
            src="https://firebasestorage.googleapis.com/v0/b/file-sharing-980d9.appspot.com/o/file-upload%2Flogo1.png?alt=media&token=a0406429-712f-4798-a7dd-c4c58c933f0a"
          />
        </Section>

        {/* Copyright Text */}
        <Text
          style={{
            textAlign: 'center',
            fontSize: 12,
            color: 'rgb(0,0,0, 0.7)',
          }}
        >
          © 2024 | Atul @2024 Copyrights  |{' '}
          <a href="/">FileSharing</a>
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: '#fff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: '30px 20px',
};

const containerButton = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
};

const button = {
  backgroundColor: '#e00707',
  padding: '12px 30px',
  borderRadius: 3,
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
};

const content = {
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '3px',
  overflow: 'hidden',
};

const containerImageFooter = {
  padding: '45px 0 0 0',
};
