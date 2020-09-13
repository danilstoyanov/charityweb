import React, { useState, useRef } from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import {
  Text,
  Button,
  Progress,
  Caption,
  Separator,
  Subhead,
  Title
} from "@vkontakte/vkui";

import kitten from '../img/kitten.png';
import comment from '../img/comment.png';

const ProgressBar = ({ currentValue = 0, targetValue = 0 }) => {
  const currentValueRef = useRef();
  const progressValue = currentValue * 100 / targetValue;

  return (
    <div className="ProgressBar">
      <span
        ref={currentValueRef}
        className="ProgressBarValue ProgressBarCurrentValue"
        style={{ left: `calc(${progressValue + '%'} - 48px)` }}
      >
        {currentValue + ' ₽'}
      </span>
      <span className="ProgressBarValue ProgressBarTargetValue">
        {targetValue + ' ₽'}
      </span>

      <div className="ProgressBarFilled" style={{ width: progressValue + '%' }}></div>
    </div>
  )
}

const CurrentProgress = () => {
  const [value, setValue] = useState(1000)

  const updateValue = () => {
    if(value < 10000) {
      setValue(value + 500)
    }
  }

  return (
    <div className="PostSnippetProgress Fixed">
      <div className="PostSnippetProgressWrapper">
  <Text className="PostSnippetProgressValue">Собрано {value}₽ из 10 000₽ </Text>
        <Progress value={value * 100 / 10000} />
      </div>

      <Button mode="commerce" size="m" onClick={updateValue}>Помочь</Button>
    </div>
  )
}

const Post = ({ id, eventState }) => {
  const { preview, title } = eventState;

  // const handleBackClick = () => {
  //   goToPanel('form')
  // }

  const postTitle = title || 'Добряши помогают котикам';
  const postPreview = preview || kitten;

  return (
    <Panel id={id}>
      <div className="Post">
        <div className="PostPreview">
          <img src={postPreview} />
        </div>

        <Div>
          <Title weight="bold" level="1" style={{ marginBottom: 4 }}>
            {postTitle}
          </Title>
          <Subhead weight="medium" style={{ color: '#6D7885', marginBottom: 4 }}>
            Автор Матвей Правосудов
          </Subhead>
          <Caption weight="regular" level="1" style={{ color: '#818C99', marginBottom: 4 }}>
            Сбор закончится через 5 дней
          </Caption>
        </Div>

        <Separator/>

        <Div>
          <Text style={{ marginBottom: 4 }}>Нужно собрать до 10 сентября</Text>
          <ProgressBar currentValue={750} targetValue={1000}/>
        </Div>

        <Separator/>

        <Div>
          <Text style={{ marginBottom: 24 }}>Привет-привет, добряш!</Text>
          <Text style={{ marginBottom: 24 }}>Я создал это событие, чтобы показать какие у меня прекрасные добряши и буду счастлив, если получится вдохновить кого-нибудь хотя бы на маленький перевод в пользу фонда Юна. </Text>
          <Text style={{ marginBottom: 24 }}><span role="img" aria-label="image">◾</span> Если получится собрать 1 000 рублей, то это будет 5 обработанных животных от блох и клещей.</Text>
          <Text style={{ marginBottom: 24 }}><span role="img" aria-label="image">◾</span> Собранные 5 000 рублей превратятся в 25 кг корма для подопечных фонда.</Text>
          <Text style={{ marginBottom: 24 }}><span role="img" aria-label="image">◾</span> А 10 000 рублей позволят провести курс занятий с кинологом по социализации сложной собаки. Чтобы она легче нашла свой дом.</Text>
          <Text style={{ marginBottom: 24 }}>В благотворительности не бывает маленьких сумм, поэтому если вы хотите помочь, то переведите любую сумму, будь-то 10 рублей или 1000 <span role="img" aria-label="image">💚</span></Text>
          <Text style={{ marginBottom: 24 }}>В благотворительности не бывает маленьких сумм, поэтому если вы хотите помочь, то переведите любую сумму, будь-то 10 рублей или 1000 <span role="img" aria-label="image">💚</span></Text>
          <Text style={{ marginBottom: 24 }}>В благотворительности не бывает маленьких сумм, поэтому если вы хотите помочь, то переведите любую сумму, будь-то 10 рублей или 1000 <span role="img" aria-label="image">💚</span></Text>
        </Div>

        <img src={comment} />
      </div>

      <CurrentProgress />
    </Panel>
  );
}

export default Post;
