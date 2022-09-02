import React from 'react';
import AppBody from '../../legacy/pages/AppBody';
import styled from 'styled-components';
import YieldFarmStakeWithdrawHeaderView from './components/YieldFarmStakeWithdrawHeader';
import YieldFarmCardImageTextView from './components/YieldFarmCardImageText';
import { ButtonSecondary } from 'legacy/components/Button';
import YieldFarmCardStats from './components/YieldFarmCardStats';
import { useParams } from 'react-router-dom';

interface CardRowProps {
  justify?: string;
}
const Container = styled.div`
  padding: 1rem;
`;
const InputAmount = styled.input`
  font-size: 18px;
  width: 100%;
  padding: 10px;
  background: papayawhip;
  border: solid;
  border-radius: 10px;
`;

const StakeAction = styled(ButtonSecondary)`
  width: fit-content;
  font-weight: 400;
  margin-left: 8px;
  font-size: 0.825rem;
  padding: 4px 6px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const CardText = styled.p`
  text-align: right;
  color: black;
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
`;
const CardRow = styled.div<CardRowProps>`
  display: flex;
  height: 40px;
  justify-content: ${(props: CardRowProps) => (props.justify ? props.justify : 'center')};
`;

const CardRowCenter = styled(CardRow)`
  align-items: center;
  justify-content: center;
`;
export default function YieldFarmWithdrawView() {
  const { stakingTokenAddress } = useParams<{ stakingTokenAddress: string }>();
  return (
    <AppBody>
      <YieldFarmStakeWithdrawHeaderView farmContractAddress={stakingTokenAddress} />
      <Container>
        <YieldFarmCardImageTextView />
        <YieldFarmCardStats farmContractAddress={stakingTokenAddress} />
        <CardRow justify="space-between">
          <CardText>Deposited:</CardText>
          <CardText>69 USDC-AMB</CardText>
        </CardRow>
        <InputAmount />
        <CardRowCenter>
          <StakeAction>Withdraw</StakeAction>
          <StakeAction>Withdraw All</StakeAction>
        </CardRowCenter>
        <CardRow justify="space-between">
          <CardText>Earned:</CardText>
          <CardText>69 USDC-AMB</CardText>
        </CardRow>
        <CardRowCenter>
          <StakeAction>Claim Rewards</StakeAction>
        </CardRowCenter>
      </Container>
    </AppBody>
  );
}
