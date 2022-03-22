interface IUser {
  userInfo: {
    id: number,
    firstName: string,
    image: string,
  } 
  isRowCard?: boolean,
  state?: {},
}

export default IUser;
