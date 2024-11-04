// import React from "react";
// // import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ItemDetailContainer = () => {
//   const { id } = useParams();
//   const [item, setItem] = useState(null);

//   useEffect(() => {
//     // Aquí puedes realizar la lógica para obtener el producto por ID (puedes simularlo por ahora)
//     const fetchItem = async () => {
//       // Simular datos de producto
//       const fetchedItem = {
//         id,
//         name: "Zapatilla Deportiva",
//         description: "Una excelente zapatilla para correr.",
//         price: 59.99,
//       };
//       setItem(fetchedItem);
//     };

//     fetchItem();
//   }, [id]);

//   return (
//     <div className="item-detail-container">
//       {item ? (
//         <>
//           <h1>{item.name}</h1>
//           <p>{item.description}</p>
//           <p>Precio: ${item.price}</p>
//         </>
//       ) : (
//         <p>Cargando producto...</p>
//       )}
//     </div>
//   );
// };

// export default ItemDetailContainer;

// import React, { useContext, useEffect, useState } from "react";
// import { Image } from "@chakra-ui/react";
// import { Stack, HStack, VStack } from "@chakra-ui/react";
// import { Heading } from "@chakra-ui/react";
// import { Text } from "@chakra-ui/react";

// const ItemDetailContainer = ({ productById }) => {
//   return (
//     <div>
//       <Heading size="md">{productById.name}</Heading>
//       <Image src="" alt={`imagen de ${productById.name}`} borderRadius="lg" />
//       <Stack mt="6" spacing="3">
//         <Text color="blue.600" fontSize="2xl">
//           Descripcion: {productById.description}
//         </Text>
//         <Text color="blue.600" fontSize="2xl">
//           Precio: ${productById.price}
//         </Text>
//       </Stack>
//     </div>
//   );
// };

// export default ItemDetailContainer;

// ItemDetailContainer.js
import React from "react";
import { Image } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const ItemDetailContainer = ({ productById }) => {
  return (
    <div>
      <Heading size="md">{productById.name}</Heading>
      <Image src="" alt={`imagen de ${productById.name}`} borderRadius="lg" />
      <Stack mt="6" spacing="3">
        <Text color="blue.600" fontSize="2xl">
          Descripcion: {productById.description}
        </Text>
        <Text color="blue.600" fontSize="2xl">
          Precio: ${productById.price}
        </Text>
      </Stack>
    </div>
  );
};

export default ItemDetailContainer;
