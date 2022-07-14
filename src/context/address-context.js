import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./auth-context";

const AddressContext = createContext(null);

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState({
    addressList: [],
    currentAddress: {},
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditAddress, setIsEditAddress] = useState(false);

  const handleIsEditAddress = (value) => {
    setIsEditAddress(value);
  };

  const handleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const {
    auth: { encodedToken, isLoggedIn },
  } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        try {
          const res = await axios.get("/api/user/address", {
            headers: { authorization: encodedToken },
          });
          if (res.status === 200) {
            setAddress((prev) => ({
              ...prev,
              addressList: res.data.addressList,
            }));
          }
        } catch (err) {
          console.error(err);
        }
      })();
    }
  }, [encodedToken, isLoggedIn]);

  const addNeWAddress = async (address) => {
    try {
      const res = await axios.post(
        "/api/user/address/",
        { address },
        { headers: { authorization: encodedToken } }
      );

      if (res.status === 201) {
        setAddress((prev) => ({ ...prev, addressList: res.data.addressList }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeAddress = async (address) => {
    try {
      const res = await axios.delete(`/api/user/address/${address._id}`, {
        headers: { authorization: encodedToken },
      });

      if (res.status === 200) {
        setAddress((prev) => ({ ...prev, addressList: res.data.addressList }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editAddress = async (address) => {
    try {
      const res = await axios.post(
        `/api/user/address/${address._id}`,
        {
          address,
        },
        {
          headers: { authorization: encodedToken },
        }
      );

      if (res.status === 200) {
        setAddress((prev) => ({ ...prev, addressList: res.data.addressList }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        address,
        isModalOpen,
        isEditAddress,
        setAddress,
        addNeWAddress,
        removeAddress,
        editAddress,
        handleModal,
        handleIsEditAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
