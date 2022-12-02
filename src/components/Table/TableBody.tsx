import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;

  background: #181c2b;
  border: 2px solid rgba(35, 38, 92, 0.42);
  border-radius: 100px 0px 0px 100px;
  color: #fff;
  box-sizing: border-box;
`;

const Content = styled.div`
  padding-left: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
`;

const Name = styled.div`
  box-sizing: border-box;
`;

const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  box-sizing: border-box;
  align-items: center;
`;

const PersonalInfoItem = styled.div`
  font-size: 12px;
  color: #a4c4e2;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
`;

const ImagePlaceholder = styled.div`
  width: 136px;
  height: 136px;

  background: rgba(0, 0, 0, 0.25);
  border-radius: 80px;
  text-align: center;
  line-height: 136px;
  margin-top: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
`;

const ViewOfLife = styled.div`
  margin-left: 20px;
  box-sizing: border-box;
  width: 100%;
`;

const Quote = styled.div`
  background: #8c90a0;
  border: 1px solid #a4c4e2;
  border-radius: 11px;
  padding: 8px 17px;
  color: #000e1c;
  width: 100%;
  height: 48px;
  overflow: auto;
  box-sizing: border-box;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 8px;
`;

const ProgressBar = styled.div`
  max-width: 200px;
  width: 100%;
  height: 24px;
  text-align: center;
  margin-bottom: 8px;
  position: relative;
  display: flex;
  box-sizing: border-box;
`;

const ProgressBarText = styled.div`
  position: absolute;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  text-align: center;
  letter-spacing: 0.155em;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    letter-spacing: -1px;
    font-size: 12px;
  }
`;

const Blue = styled.div`
  height: 100%;
  width: 50%;
  background: #1d77ff;
  box-sizing: border-box;
  border-radius: 10px 0px 0px 10px;
`;

const Red = styled.div`
  height: 100%;
  width: 50%;
  background: #ff1d1d;
  box-sizing: border-box;
  border-radius: 0px 10px 10px 0px;
`;

interface TableBodyProps {
  data: any[];
}

export const TableBody = ({ data }: TableBodyProps) => (
  <>
    {data.map((item) => (
      <Card key={item.ID}>
        <Content>
          <PersonalInfoContainer>
            <Name>{item.NAME}</Name>
            <ImagePlaceholder>image</ImagePlaceholder>
            <PersonalInfoItem>
              <div>📌</div>
              <div>{item.REGION} область</div>
            </PersonalInfoItem>
            <PersonalInfoItem>
              <div>👨‍💻</div>
              <div>{item.BIO}</div>
            </PersonalInfoItem>
          </PersonalInfoContainer>
          <ViewOfLife>
            <Quote>{item.QUOTE || '-'}</Quote>
            <ProgressBar>
              <ProgressBarText>ДИПЛОМАТІЯ</ProgressBarText>
              <Blue style={{ width: item.EQUALITY }} />
              <Red style={{ width: item.MARKET }} />
            </ProgressBar>
            <ProgressBar>
              <ProgressBarText>ЕКОНОМІКА</ProgressBarText>
              <Blue style={{ width: item.WORLD }} />
              <Red style={{ width: item.NATION }} />
            </ProgressBar>
            <ProgressBar>
              <ProgressBarText>ГРОМАДА</ProgressBarText>
              <Blue style={{ width: item.FREEDOM }} />
              <Red style={{ width: item.AUTHORITY }} />
            </ProgressBar>
            <ProgressBar>
              <ProgressBarText>СОЦІУМ</ProgressBarText>
              <Blue style={{ width: item.PROGRESS }} />
              <Red style={{ width: item.TRADITION }} />
            </ProgressBar>
          </ViewOfLife>
        </Content>
      </Card>
    ))}
  </>
);
