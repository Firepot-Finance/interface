import React from 'react';
import styled from 'styled-components';
import { useActivePopups } from '../../state/application/hooks';
import { AutoColumn } from '../Column';
import PopupItem from './PopupItem';
import { useURLWarningVisible } from '../../state/user/hooks';

const MobilePopupWrapper = styled.div<{ height: string | number }>`
  position: relative;
  max-width: 100%;
  height: ${({ height }) => height};
  margin: ${({ height }) => (height ? '0 auto;' : 0)};
  margin-bottom: ${({ height }) => (height ? '20px' : 0)}};
`;

const MobilePopupInner = styled.div`
  height: 99%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  -webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const FixedPopupColumn = styled(AutoColumn)<{ extraPadding: boolean }>`
  position: fixed;
  top: ${({ extraPadding }) => '128px'};
  right: 1rem;
  max-width: 310px !important;
  width: 100%;
  z-index: 3;
`;

export default function Popups() {
  // get all popups
  const activePopups = useActivePopups();

  const urlWarningActive = useURLWarningVisible();

  return (
    <>
      <FixedPopupColumn gap="20px" extraPadding={urlWarningActive}>
        {activePopups.map((item) => (
          <PopupItem key={item.key} content={item.content} popKey={item.key} removeAfterMs={item.removeAfterMs} />
        ))}
      </FixedPopupColumn>
      <MobilePopupWrapper height={activePopups?.length > 0 ? 'fit-content' : 0}>
      </MobilePopupWrapper>
    </>
  );
}
