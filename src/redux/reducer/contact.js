const initStateContact = {
  firstName: '',
  lastName: '',
  age: '',
  photo: '',
};

export const addContactReducer = (state = initStateContact, action) => {
  switch (action.type) {
    case 'SET_ADD_CONTACT':
      return {
        ...state,
        firstName: action.value.firstName,
        lastName: action.value.lastName,
        age: action.value.age,
        photo: action.value.photo,
      };

    default:
      return state;
  }
};

const initContact = {
  contacts: [],
};

export const getContactReducer = (state = initContact, action) => {
  switch (action.type) {
    case 'SET_CONTACT':
      return {
        ...state,
        contacts: action.value,
      };

    default:
      return state;
  }
};
