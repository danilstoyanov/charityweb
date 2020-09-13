import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Banner from '@vkontakte/vkui/dist/components/Banner/Banner';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

import { Icon28TargetOutline, Icon28CalendarOutline } from '@vkontakte/icons';

import PanelHeaderBack from '@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack';

const Create = ({ id, goToPanel, setCharityType }) => {
  const handleBackClick = () => {
    goToPanel('start')
  }

  const handleBannerClick = (screen, charityType) => {
    setCharityType(charityType)
    goToPanel(screen)
  }

  return (
    <Panel id={id} centered>
      <PanelHeader left={<PanelHeaderBack onClick={handleBackClick} />}>Тип сбора</PanelHeader>

      <Div>
        <Banner
          mode="tint"
          asideMode="expand"
          header="Целевой сбор"
          subheader="Когда есть определенная цель"
          before={<Icon28TargetOutline fill="#3F8AE0" />}
          onClick={() => {
            handleBannerClick('form', 'target')
          }}
        />

        <Banner
          mode="tint"
          asideMode="expand"
          header="Регулярный сбор"
          subheader="Если помощь нужна ежемесячно"
          before={<Icon28CalendarOutline fill="#3F8AE0" />}
          onClick={() => {
            handleBannerClick('form', 'regular')
          }}
        />
      </Div>
    </Panel>
  );
}

export default Create;
