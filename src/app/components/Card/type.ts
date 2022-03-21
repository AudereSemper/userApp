interface IUser {
  userInfo: {
    id: number,
    firstName: string,
    image: string,
  } 
  isRowCard?: boolean,
}

export default IUser;
