import React, { useState } from "react";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import FormLayout from "@vkontakte/vkui/dist/components/FormLayout/FormLayout";
import Input from "@vkontakte/vkui/dist/components/Input/Input";
import FormLayoutGroup from "@vkontakte/vkui/dist/components/FormLayoutGroup/FormLayoutGroup";
import Select from "@vkontakte/vkui/dist/components/Select/Select";
import Radio from "@vkontakte/vkui/dist/components/Radio/Radio";
import File from "@vkontakte/vkui/dist/components/File/File";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import { Icon28PictureOutline, Icon12Cancel } from "@vkontakte/icons";
import { Textarea } from "@vkontakte/vkui";

const ImagePreview = ({ imageSrc, onResetPreviewClick }) => {
  return (
    <div className="ImagePreview">
      <button onClick={onResetPreviewClick}>
        <Icon12Cancel fill="#FFF" />
      </button>

      <img src={imageSrc} />
    </div>
  );
};

const Form = ({ id, goToPanel, charityType, setCharityType, setEventState }) => {
  const [step, setStep] = useState("first");
  const [firstStepFormData, setFirstStepFormData] = useState({
    preview: '',
    title: '',
    target: '',
    description: '',
    sum: '',
    bill: '',
  })

  const [secondStepFormData, setSecondStepFormData] = useState({
    author: '',
    endType: 'enoughSum', // enoughSum || date,
    endDate: ''
  })

  const handleImageUpload = (file) => {
    if (!file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (event) => {
      setFirstStepFormData({
        ...firstStepFormData,
        preview: event.target.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const handleImageResetClick = () => {
    setFirstStepFormData({
      ...firstStepFormData,
      preview: '',
    });
  };

  const handleBackClick = () => {
    goToPanel("create");
    setCharityType("");
  };

  const getPanelTitle = () => {
    if(charityType === "regular") {
      return "Регулярный сбор"
    } else {
      if(step === "second") {
        return "Оформление"
      } else {
        return "Целевой сбор"
      }
    }
  }

  const onChangeFirstStepForm = (e) => {
    const { name, value } = e.currentTarget;

    setFirstStepFormData({
      ...firstStepFormData,
      [name]: value,
    });
  }

  const onChangeSecondStepForm = (e) => {
    const { name, value } = e.currentTarget;

    secondStepFormData({
      ...firstStepFormData,
      [name]: value,
    });
  }

  const onFirstStepSubmit = () => {
    if(charityType === "regular") {
      setStep("second")

      return
    }

    setEventState({ ...firstStepFormData, secondStepFormData })
    goToPanel("snippet")
  }

  const onSecondStepSubmit = () => {
    setEventState({ ...firstStepFormData, secondStepFormData })
    goToPanel("snippet")
  }

  console.log(firstStepFormData, 'firstStepFormData')

  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={handleBackClick} />}>
        {getPanelTitle()}
      </PanelHeader>

      {step === "first" && (
        <FormLayout>
          {firstStepFormData.preview ? (
            <ImagePreview
              imageSrc={firstStepFormData.preview}
              onResetPreviewClick={handleImageResetClick}
            />
          ) : (
            <File
              className="FileInputWrapper"
              controlSize="xl"
              mode="tertiary"
              name="preview"
              before={<Icon28PictureOutline />}
              onChange={(event) => {
                handleImageUpload(event.target.files[0])
              }}
            />
          )}

          <Input
            type="text"
            top="Название сбора"
            name="title"
            value={firstStepFormData.title}
            placeholder="Название сбора"
            onChange={onChangeFirstStepForm}
          />

          <Input
            type="number"
            top="Сумма, ₽"
            name="sum"
            value={firstStepFormData.sum}
            placeholder="Сколько нужно собрать?"
            onChange={onChangeFirstStepForm}
          />

          <Input
            type="text"
            top="Цель"
            name="target"
            value={firstStepFormData.target}
            placeholder="Например, лечение человека"
            onChange={onChangeFirstStepForm}
          />

          <Textarea
            top="Описание"
            name="description"
            value={firstStepFormData.description}
            placeholder="На что пойдет деньги и как они кому-то помогут ?"
            onChange={onChangeFirstStepForm}
          />

          <Select
            top="Куда получать деньги"
            placeholder="Выберите счет"
            onChange={(e) => {
              console.log(e.currentTarget)
            }}
            value=""
            name="purpose"
          >
            <option value="0">Счет VK Pay · 1234</option>
            <option value="1">Счет VK Pay · 4321</option>
          </Select>

          <Button size="xl" onClick={onFirstStepSubmit}>Далее</Button>
        </FormLayout>
      )}

      {step === "second" && (
        <React.Fragment>
          <FormLayout>
            <Select
              top="Автор"
              placeholder="Выберите счет"
              onChange={onChangeSecondStepForm}
              value={""}
              name="purpose"
            >
              <option value="0">Матвей Правосудов</option>
              <option value="1">Лиза Подкладышева </option>
            </Select>

            <FormLayoutGroup top="Сбор завершится">
              <Radio name="type" onChange={onChangeSecondStepForm}>Когда соберем сумму</Radio>
              <Radio name="type" onChange={onChangeSecondStepForm}>В определенную дату</Radio>
            </FormLayoutGroup>

            <Select
              top="Дата окончания"
              placeholder="Дата окончания"
              onChange={onChangeSecondStepForm}
              value={""}
              name="finishDate"
            >
              <option value="13">13 сентября</option>
              <option value="14">14 сентября</option>
              <option value="15">15 сентября</option>
              <option value="16">16 сентября</option>
              <option value="17">17 сентября</option>
              <option value="18">18 сентября</option>
              <option value="19">19 сентября</option>
              <option value="20">20 сентября</option>
            </Select>

          </FormLayout>

          <Div>
            <Button
              size="xl"
              style={{ marginTop: "auto" }}
              onClick={onSecondStepSubmit}
            >
              Создать сбор
            </Button>
          </Div>
        </React.Fragment>
      )}
    </Panel>
  );
};

export default Form;
