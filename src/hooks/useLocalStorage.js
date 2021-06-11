import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    //setup our state
    //  if we have a value current in localStorage, put that in our initialState
    //  else, use our default initialState and put that into localStorage
  
    //if we are updating our state
    //  add current update value to localstorage
    const [value, setValue] = useState(()=>{
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      }
  
      localStorage.setItem(key, JSON.stringify(initialValue));
      return(initialValue);
    });
  
    const setStoredValue = value => {
      setValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    return([value, setStoredValue]);
}

export default useLocalStorage;