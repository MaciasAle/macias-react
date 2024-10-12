import React, { useContext } from "react";
import { Card, CardBody, Stack, Text, Box, Button } from "@chakra-ui/react";
import { ItemContext } from "../context/CartContext";

export const CartCard = (props) => {
  const [cart, setCart] = useContext(ItemContext);

  const removeItem = () => {
    setCart((currItems) => {
      if (
        currItems.find((item) => item.id === Number(props.id))?.quantity === 1
      ) {
        return currItems.filter((item) => item.id !== props.id);
      } else {
        return currItems.map((item) => {
          if (item.id === props.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <div>
      <Box border="2px" borderColor="gray.200">
        <Card
          maxW="sm"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <CardBody>
            <Text size="md">
              Nombre: {props.name}, cantidad: {props.quantity}
            </Text>

            <Stack mt="6" spacing="3">
              <Text color="blue.600" fontSize="2xl">
                Precio: $ {props.price}
              </Text>
              <Button onClick={removeItem}>
                Eliminar producto del carrito
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </div>
  );
};
