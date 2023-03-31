import { useState, useContext, createContext } from "react";

// createContext() fonksiyonu ile oluşturulan değişken Context'e alınır. UserContext.Provider etiketi içinde value'ye atanan değer burda belirtilen DEĞİŞKEN ile nested componentlerde ULAŞILABİLİR.
const UserContext = createContext()

const WithContext = () => {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}! I am Component 1`}</h1>
        <Component2 />
      </UserContext.Provider>
    </>
  )
}

function Component2() {
  return (
    <>
      <h1>Component 2 - Ben state kullanmadım da göndermedim de</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3 - Ben state kullanmadım da göndermedim de</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4 - Ben state kullanmadım da göndermedim de</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again! I am component 5`}</h2>
    </>
  );
}
export default WithContext