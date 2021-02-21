import React from 'react';
import logo from './logo.svg';
import {GitDirector} from './gitDirector'
import Button from '@material-ui/core/Button'
import './App.css';

function App() {
    const director = new GitDirector()
    const repoUrl: webkitURL = new webkitURL('git@github.com:dkrystall/js-git-csm.git')

    return (
    <div className="App">
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" onClick={() => director.setRepo(repoUrl)}>
          Set git Repo
        </Button>
      </label>
    </div>
  );
}

export default App;
