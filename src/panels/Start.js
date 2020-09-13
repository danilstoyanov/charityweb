import React from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Placeholder from '@vkontakte/vkui/dist/components/Placeholder/Placeholder';

const Start = ({ id, goToPanel }) => {
  const handleCreateButtonClick = () => {
    goToPanel('create')
  }

  return (
    <Panel id={id}>
      <PanelHeader>Пожертвования</PanelHeader>
  
      <Placeholder
        stretched
        action={<Button size="m" onClick={handleCreateButtonClick}>Создать сбор</Button>}
      >
        У вас пока нет сборов. <br />Начните доброе дело.
      </Placeholder>
    </Panel>
  );
}

export default Start;
