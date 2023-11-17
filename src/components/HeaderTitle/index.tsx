import React from "react";

import IHeaderTitle from "./IHeaderTitle";
import * as S from "./style";

const HeaderTitle = ({ title }: IHeaderTitle) => {
  return <S.HeaderTitle>{title}</S.HeaderTitle>;
};

export default HeaderTitle;
