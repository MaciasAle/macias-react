import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Box,
} from "@chakra-ui/react";
import { ButtonGroup } from "reactstrap";
import { ItemContext } from "../context/CartContext";

const Item = ({ product }) => {
  const [cart, setCart] = useContext(ItemContext);

  const addToCart = () => {
    setCart((currentItems) => {
      const isItemsFound = currentItems.find((item) => item.id === product.id);
      if (isItemsFound) {
        return currentItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currentItems,
          {
            id: product.id,
            name: product.name,
            quantity: 1,
            price: product.price,
          },
        ];
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
            <Heading size="md">{product.name}</Heading>
            <Image src="" alt={`imagen de ${product.name}`} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Text color="blue.600" fontSize="2xl">
                Precio: ${product.price}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Link to={`/product/${product.id}`}>
                <Button variant="solid" colorScheme="blue">
                  Detalles
                </Button>
              </Link>
              <Button onClick={() => addToCart()}>Agregar al carrito</Button>
            </ButtonGroup>
          </CardFooter>
          <Divider />
        </Card>
      </Box>
    </div>
  );
};

export default Item;
