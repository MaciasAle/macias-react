// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
// import { Stack, HStack, VStack } from "@chakra-ui/react";
// import { Heading } from "@chakra-ui/react";
// import { Text } from "@chakra-ui/react";
// import { Divider } from "@chakra-ui/react";
// import { Button, ButtonGroup } from "@chakra-ui/react";
// import { Box } from "@chakra-ui/react";
// import { ItemContext } from "../context/CartContext";
// import { collection, getDocs, getFirestore } from "firebase/firestore";
// import ItemDetailContainer from "./ItemDetailContainer";

// const ItemDetail = () => {
//   const [product, setProducts] = useState([]);
//   const [productById, setProductById] = useState([]);
//   const { id } = useParams();
//   const [cart, setCart] = useContext(ItemContext);

//   useEffect(() => {
//     const db = getFirestore();
//     const itemsCollection = collection(db, "productos");

//     const fetchDataId = (id) => {
//       return new Promise((resolve) => {
//         const item = product.find((elem) => elem.id === id);

//         if (item) {
//           resolve(item);
//         }
//       });
//     };

//     getDocs(itemsCollection).then((snapshot) => {
//       const docs = snapshot.docs.map((doc) => doc.data());
//       setProducts(docs);
//       fetchDataId(Number(id)).then((res) => {
//         setProductById(res);
//       });
//     });
//   }, [id, product]);

//   const addToCart = () => {
//     setCart((currentItems) => {
//       const isItemsFound = currentItems.find(
//         (item) => item.id === productById.id
//       );
//       if (isItemsFound) {
//         return currentItems.map((item) => {
//           if (item.id === productById.id) {
//             return { ...item, quantity: item.quantity + 1 };
//           } else {
//             return item;
//           }
//         });
//       } else {
//         return [
//           ...currentItems,
//           {
//             id: productById.id,
//             name: productById.name,
//             quantity: 1,
//             price: productById.price,
//           },
//         ];
//       }
//     });
//   };

//   return (
//     <div>
//       <Box border="2px" borderColor="gray.200">
//         <Card
//           maxW="sm"
//           display="flex"
//           alignItems="center"
//           justifyContent="space-between"
//         >
//           <CardBody>
//             <ItemDetailContainer productById={productById} />
//           </CardBody>
//           <CardFooter>
//             <Button
//               variant="ghost"
//               colorScheme="blue"
//               onClick={() => addToCart()}
//             >
//               Agregar al carrito
//             </Button>
//           </CardFooter>
//           <Divider />
//         </Card>
//       </Box>
//     </div>
//   );
// };

// export default ItemDetail;

// ItemDetail.js
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { ItemContext } from "../context/CartContext";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemDetail = () => {
  const [product, setProducts] = useState([]);
  const [productById, setProductById] = useState(null); // Cambiado a null
  const { id } = useParams();
  const [cart, setCart] = useContext(ItemContext);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "productos");

    const fetchDataId = (id) => {
      return new Promise((resolve) => {
        const item = product.find((elem) => elem.id === id);

        if (item) {
          resolve(item);
        }
      });
    };

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
      fetchDataId(Number(id)).then((res) => {
        setProductById(res);
      });
    });
  }, [id, product]);

  const addToCart = () => {
    setCart((currentItems) => {
      const isItemsFound = currentItems.find(
        (item) => item.id === productById.id
      );
      if (isItemsFound) {
        return currentItems.map((item) => {
          if (item.id === productById.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currentItems,
          {
            id: productById.id,
            name: productById.name,
            quantity: 1,
            price: productById.price,
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
            {productById && <ItemDetailContainer productById={productById} />}
          </CardBody>
          <CardFooter>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => addToCart()}
            >
              Agregar al carrito
            </Button>
          </CardFooter>
        </Card>
      </Box>
    </div>
  );
};

export default ItemDetail;
