import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import PersonalForm from "./PersonalForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import CertificationsForm from "./CertificationsForm";
import KycForm from "./KycForm";
import ExperienceForm from "./ExperienceForm";
import ReviewForm from "./ReviewForm";

const Onboarding = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const steps = [
    { title: "Personal", content: <PersonalForm /> },
    { title: "Education", content: <EducationForm /> },
    { title: "Skills", content: <SkillsForm /> },
    { title: "Certifications", content: <CertificationsForm /> },
    { title: "Experience", content: <ExperienceForm /> },
    { title: "KYC", content: <KycForm /> },
    { title: "Review", content: <ReviewForm /> },
  ];

  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    padding: 24,
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Onboarding complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default Onboarding;
