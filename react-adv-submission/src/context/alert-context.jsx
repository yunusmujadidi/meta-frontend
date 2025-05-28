import React, { useState, createContext, useContext } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [alertInfo, setAlertInfo] = useState({
    type: "",
    message: "",
    title: "",
  });
  const cancelRef = React.useRef();

  const onOpenAlert = (type, title, message) => {
    setAlertInfo({ type, title, message });
    onOpen();
  };

  return (
    <AlertContext.Provider value={{ onOpen: onOpenAlert }}>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            py={4}
            backgroundColor={
              alertInfo.type === "success" ? "#81C784" : "#FF8A65"
            }
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {alertInfo.title}
            </AlertDialogHeader>
            <AlertDialogBody color="white">{alertInfo.message}</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Close
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext };
export const useAlertContext = () => useContext(AlertContext);
