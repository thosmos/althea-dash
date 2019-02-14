import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import QR from "qrcode.react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label
} from "reactstrap";

export default ({ address, settings }) => {
  let [t] = useTranslation();
  let [qr, setQR] = useState("");

  let { meshIp, wgPublicKey } = settings.network;

  return (
    <React.Fragment>
      <h2>{t("nodeInfo")}</h2>
      <Card>
        <CardBody>
          {qr && (
            <div className="text-center">
              <QR
                style={{
                  height: "auto",
                  width: "50%"
                }}
                value={qr}
              />
            </div>
          )}
          <Label>
            <b>{t("meshIp")}</b>
          </Label>
          <InputGroup>
            <Input readOnly value={meshIp || ""} />
            <InputGroupAddon addonType="append">
              <InputGroupText
                style={{ cursor: "pointer" }}
                onClick={() => setQR(meshIp)}
              >
                <FontAwesomeIcon icon="qrcode" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Label>
            <b>{t("ethereumAddress")}</b>
          </Label>
          <InputGroup>
            <Input readOnly value={address || ""} />
            <InputGroupAddon addonType="append">
              <InputGroupText
                style={{ cursor: "pointer" }}
                onClick={() => setQR(address)}
              >
                <FontAwesomeIcon icon="qrcode" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <Label>
            <b>{t("wireguardPublicKey")}</b>
          </Label>
          <InputGroup>
            <Input readOnly value={wgPublicKey || ""} />
            <InputGroupAddon addonType="append">
              <InputGroupText
                style={{ cursor: "pointer" }}
                onClick={() => setQR(wgPublicKey)}
              >
                <FontAwesomeIcon icon="qrcode" />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};
