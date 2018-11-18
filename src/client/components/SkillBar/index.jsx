// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string,
  amnt: number,
};

const AmntBar = styled.div`
${
  ({ amnt }) => `width: ${amnt}%;`
}
  background-color: #2699c5;
  height: 70%;
`;

const WholeBar = styled.div`
  width: 80%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const Skill = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  &::after{
    color: white;
    margin-left: 30px;
    content: '${({ amnt }) => amnt}%';
  }
`;

const SkillLabel = styled.label`
  background-color: white;
  color: #777;
  width: 20%;
  height: 100%;
  padding-left: 10px;
`;

const SkillBar = ({ label, amnt }: Props) => (
  <Skill amnt={amnt}>
    <SkillLabel>
      {label}
    </SkillLabel>
    <WholeBar>
      <AmntBar amnt={amnt} />
    </WholeBar>
  </Skill>
);

export default SkillBar;
