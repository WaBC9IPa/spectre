import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  margin-bottom: 30px;

  background: #181c2b;
  border: 2px solid rgba(35, 38, 92, 0.42);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 3px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px 16px 16px 100px;
  color: #fff;
  box-sizing: border-box;

  @media (max-width: 671px) {
    border-radius: 16px;
  }
`;

const Content = styled.div`
  padding-left: 25px;
  padding-bottom: 25px;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;

  @media (max-width: 671px) {
    padding-left: 0;
  }
`;

const Name = styled.div`
  box-sizing: border-box;
  color: #9dacc2;
  text-shadow: 0px 0px 2px #434343;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
`;

const PersonalInfoItem = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #8398ac;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 20px;

  @media (max-width: 900px) {
    margin-top: 10px;
  }
`;

const PersonalInfoFlexContainer = styled.div`
  box-sizing: border-box;
  display: flex;

  ${PersonalInfoItem}:last-child {
    margin-left: 5px;
  }
`;

const PersonalInfoItemText = styled.span`
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ImagePlaceholder = styled.div`
  width: calc(20% - 5px);
  aspect-ratio: 1 / 1;

  box-shadow: inset 5px 0px 12px rgba(0, 0, 0, 0.25);
  filter: drop-shadow(5px 0px 20px rgba(0, 0, 0, 0.55));
  background: rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  margin-top: 15px;
  box-sizing: border-box;

  @media (max-width: 671px) {
    display: none;
  }
`;

const PersonalInfo = styled.div`
  margin-left: 10px;
  box-sizing: border-box;
  width: calc(80% - 5px);

  @media (max-width: 671px) {
    width: 100%;
    margin-left: 0px;
  }
`;

const Quote = styled.div`
  background: #1a1d2e;
  box-shadow: inset 0px 0px 3px 4px rgba(3, 1, 14, 0.25);
  border-radius: 0px 14px 0px 24px;
  color: #8398ac;
  text-align: center;
  padding: 20px 0px;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  margin-bottom: 15px;

  @media (max-width: 671px) {
    border-radius: 14px 14px 0px 0px;
  }
`;

const PersonalInfoDetailsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-right: 15px;

  @media (max-width: 671px) {
    padding-left: 15px;
    flex-direction: column;
  }
`;

const PersonalInfoTextDetails = styled.div`
  box-sizing: border-box;
  background: #141722;
  box-shadow: inset 0px 0px 5px 2px rgba(6, 6, 7, 0.2);
  border-radius: 14px;
  margin-right: 20px;
  padding: 12px;
  width: calc(50% - 10px);
  display: flex;

  @media (max-width: 671px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const PersonalInfoTextDetailsContainer = styled.div`
  box-sizing: border-box;
  width: calc(70% - 3px);

  @media (max-width: 671px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ProgressBarsContainer = styled.div`
  box-sizing: border-box;
  width: calc(50% - 10px);

  @media (max-width: 671px) {
    width: 100%;
  }
`;

const ProgressBarText = styled.div`
  position: absolute;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  letter-spacing: 0.155em;

  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    letter-spacing: 1px;
    font-size: 19px;
  }

  @media (max-width: 735px) {
    letter-spacing: 1px;
    font-size: 15px;
  }
`;

const Percentage = styled.div`
  box-sizing: border-box;
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

const BluePercentage = styled(Percentage)`
  left: 7px;
`;

const RedPercentage = styled(Percentage)`
  right: 7px;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 34px;
  text-align: center;
  margin-bottom: 8px;
  position: relative;
  display: flex;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.55);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    cursor: pointer;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.9);
    filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.25));

    ${ProgressBarText}, ${BluePercentage}, ${RedPercentage} {
      color: rgba(0, 0, 0, 0.3);
    }
  }

  @media (max-width: 900px) {
    height: 28px;
  }

  @media (max-width: 735px) {
    height: 24px;
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

const MovementContainer = styled.div`
  box-sizing: border-box;
  margin-left: 6px;
  width: calc(30% - 3px);
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const MovementImage = styled.div`
  box-sizing: border-box;
  width: 100%;
  aspect-ratio: 1 / 1;
  background: #424952;
  box-shadow: 0px 0px 4px rgba(169, 169, 169, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 100%;
  margin-bottom: 14px;
`;

const MovementText = styled.div`
  box-sizing: border-box;
  font-style: normal;
  font-weight: 800;
  font-size: 8px;
`;

const RecordDate = styled.div`
  box-sizing: border-box;
  text-align: right;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  color: #3e5060;
  margin-top: auto;

  white-space: nowrap;
`;

interface TableBodyProps {
  data: any[];
  setSearchValue: (value: string) => void;
  handleSearch: (value?: string) => void;
}

export const TableBody = ({
  data,
  setSearchValue,
  handleSearch,
}: TableBodyProps) => (
  <>
    {data.map((item) => (
      <Card key={item.ID}>
        <Content>
          <ImagePlaceholder />

          <PersonalInfo>
            <Quote>{item.QUOTE || '-'}</Quote>
            <PersonalInfoDetailsContainer>
              <PersonalInfoTextDetails>
                <PersonalInfoTextDetailsContainer>
                  <Name>{item.NAME}</Name>
                  <PersonalInfoFlexContainer>
                    <PersonalInfoItem>
                      🏙
                      <PersonalInfoItemText
                        style={{ marginLeft: '3px' }}
                        onClick={() => {
                          if (item.ORIGIN && item.ORIGIN.length) {
                            setSearchValue(item.ORIGIN);
                            handleSearch(item.ORIGIN);
                          }
                        }}
                      >
                        {item.ORIGIN}
                      </PersonalInfoItemText>
                    </PersonalInfoItem>
                    <PersonalInfoItem>
                      👨‍💻
                      <PersonalInfoItemText
                        onClick={() => {
                          const string = String(item['CATEGORY, TAGS'])
                            .split(', ')
                            .pop();

                          if (string && string.length) {
                            setSearchValue(string);
                            handleSearch(string);
                          }
                        }}
                      >
                        {' '}
                        {(() => {
                          const string = String(item['CATEGORY, TAGS'])
                            .split(', ')
                            .pop();

                          if (string && string[0]) {
                            return string[0].toUpperCase() + string.slice(1);
                          }
                          return '-';
                        })()}
                      </PersonalInfoItemText>
                    </PersonalInfoItem>
                  </PersonalInfoFlexContainer>
                  <PersonalInfoItem>
                    📌
                    <PersonalInfoItemText
                      onClick={() => {
                        if (item.REGION && item.REGION.length) {
                          setSearchValue(item.REGION);
                          handleSearch(item.REGION);
                        }
                      }}
                    >
                      {item.REGION} область
                    </PersonalInfoItemText>
                  </PersonalInfoItem>
                  <PersonalInfoItem>
                    🦿
                    <PersonalInfoItemText>аналоцентрист</PersonalInfoItemText>
                  </PersonalInfoItem>
                </PersonalInfoTextDetailsContainer>
                <MovementContainer>
                  <MovementImage />
                  <MovementText>Рух “Лайно”</MovementText>
                  <RecordDate>
                    {(() => {
                      const split = String(item.DATE).split('.');

                      if (split.length === 3) {
                        const date = new Date(
                          `${split[1]}-${split[0]}-${split[2]}`,
                        );

                        return `${date.getDate()} ${date.toLocaleString(
                          'default',
                          {
                            month: 'short',
                          },
                        )} ${date.getFullYear()}`.toLowerCase();
                      }
                      return '-';
                    })()}
                  </RecordDate>
                </MovementContainer>
              </PersonalInfoTextDetails>
              <ProgressBarsContainer>
                <ProgressBar>
                  <BluePercentage>{item.EQUALITY}</BluePercentage>
                  <RedPercentage>{item.MARKET}</RedPercentage>
                  <ProgressBarText>ДИПЛОМАТІЯ</ProgressBarText>
                  <Blue style={{ width: item.EQUALITY }} />
                  <Red style={{ width: item.MARKET }} />
                </ProgressBar>
                <ProgressBar>
                  <BluePercentage style={{ fontSize: '12px' }}>
                    {item.WORLD}
                  </BluePercentage>
                  <RedPercentage style={{ fontSize: '12px' }}>
                    {item.NATION}
                  </RedPercentage>
                  <ProgressBarText>ЕКОНОМІКА</ProgressBarText>
                  <Blue style={{ width: item.WORLD }} />
                  <Red style={{ width: item.NATION }} />
                </ProgressBar>
                <ProgressBar>
                  <BluePercentage style={{ fontSize: '13px' }}>
                    {item.FREEDOM}
                  </BluePercentage>
                  <RedPercentage style={{ fontSize: '13px' }}>
                    {item.AUTHORITY}
                  </RedPercentage>
                  <ProgressBarText>ГРОМАДА</ProgressBarText>
                  <Blue style={{ width: item.FREEDOM }} />
                  <Red style={{ width: item.AUTHORITY }} />
                </ProgressBar>
                <ProgressBar>
                  <BluePercentage style={{ fontSize: '14px' }}>
                    {item.PROGRESS}
                  </BluePercentage>
                  <RedPercentage style={{ fontSize: '14px' }}>
                    {item.TRADITION}
                  </RedPercentage>
                  <ProgressBarText>СОЦІУМ</ProgressBarText>
                  <Blue style={{ width: item.PROGRESS }} />
                  <Red style={{ width: item.TRADITION }} />
                </ProgressBar>
              </ProgressBarsContainer>
            </PersonalInfoDetailsContainer>
          </PersonalInfo>
        </Content>
      </Card>
    ))}
  </>
);
