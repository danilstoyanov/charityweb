import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import {
  Text,
  Button,
  Progress,
  Caption,
  Headline,
} from "@vkontakte/vkui";

import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';
import kitten from '../img/kitten.png';

const Snippet = ({ id, goToPanel, eventState }) => {
  const { preview, title } = eventState;

  const handleBackClick = () => {
    goToPanel('form')
  }

  const handleSnippetClick = () => {
    goToPanel('post')
  }

  const postTitle = title || 'Добряши помогают котикам';
  const postPreview = preview || kitten;

  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={handleBackClick} />}>Превью сниппета</PanelHeader>

      <Div className="PostSnippet" onClick={handleSnippetClick}>
        <div className="PostSnippetContent">
          <img src={postPreview} />
          <div className="PostSnippetHeading">
            <Headline weight="semibold" style={{ marginBottom: 4 }}>{postTitle}</Headline>
            <Caption
              className="PostSnippetCaption"
              level="1"
              weight="regular"
            >
              Матвей Правосудов · Закончится через 5 дней
            </Caption>
          </div>
          <div className="PostSnippetProgress">
            <div className="PostSnippetProgressWrapper">
              <Text className="PostSnippetProgressValue">Собрано 8 750₽ из 10 000₽ </Text>
              <Progress value={40} />
            </div>

            <Button mode="outline" size="m">Помочь</Button>
          </div>
        </div>
      </Div>
    </Panel>
  );
}

export default Snippet;
