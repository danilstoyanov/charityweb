import React, { useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import '@vkontakte/vkui/dist/vkui.css';

import Start from './panels/Start';
import Create from './panels/Create';
import Form from './panels/Form';
import Snippet from './panels/Snippet';
import Post from './panels/Post';

import './main.css';

const App = () => {
  const [activePanel, setActivePanel] = useState('start');
  const [charityType, setCharityType] = useState('');
  const [eventState, setEventState] = useState({});

  const goToPanel = panelName => {
    setActivePanel(panelName);
  };

  const setEventStateFunc = (payload = {}) => {
    setEventState({ ...eventState, ...payload });
  }

  return (
    <View activePanel={activePanel}>
      <Start
        id="start"
        goToPanel={goToPanel}
      />

      <Create
        id="create"
        goToPanel={goToPanel}
        setCharityType={setCharityType}
      />

      <Form
        id="form"
        goToPanel={goToPanel}
        charityType={charityType}
        setCharityType={setCharityType}
        setEventState={setEventStateFunc}
      />

      <Snippet
        id="snippet"
        goToPanel={goToPanel}
        charityType={charityType}
        eventState={eventState}
        setCharityType={setCharityType}
        setEventState={setEventStateFunc}
      />

      <Post
        id="post"
        goToPanel={goToPanel}
        charityType={charityType}
        eventState={eventState}
        setCharityType={setCharityType}
        setEventState={setEventStateFunc}
      />
    </View>
  );
}

export default App;

