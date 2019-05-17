import React from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "store";

const LowBalance = () => {
  const [t] = useTranslation();
  const [{ debt, closeThreshold, lowBalance }] = useStore();

  if (!lowBalance) return null;

  if (-debt < closeThreshold)
    return <div className="low-balance">{t("accountThrottled")}</div>;
  else return <div className="low-balance">{t("accountWarning")}</div>;
};

export default LowBalance;
