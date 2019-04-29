import React from "react";
import { useTranslation } from "react-i18next";
import phoneIcon from "images/phone.svg";
import { Form, FormGroup } from "reactstrap";
import PhoneInput from "react-phone-number-input";
import SmartInput from "react-phone-number-input/smart-input";
import { Flags } from "utils";

export default ({ phone, handlePhone }) => {
  let [t] = useTranslation();

  return (
    <div>
      <h5>{t("phoneNumber")}</h5>

      <div className="d-flex p-4">
        <img src={phoneIcon} alt="Phone" className="mr-4" />
        <div>
          <p>{t("enterPhone")}</p>
          <Form>
            <FormGroup>
              <PhoneInput
                country="US"
                flags={Flags}
                id="exitPhone"
                inputComponent={SmartInput}
                placeholder={t("phoneNumber")}
                value={phone}
                onChange={p => handlePhone(p)}
              />
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};
