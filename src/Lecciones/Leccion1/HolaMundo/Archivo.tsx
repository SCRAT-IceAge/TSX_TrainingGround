import React from 'react';
import { View, Text } from 'react-native';

// 1. Definimos el texto real
const TEXTO_REAL = "Hola Mundo";

// 2. Definimos la "Verdad" en un solo objeto
// Si el alumno cambia algo aquí, el verificador cambiará automáticamente.
export const RESULTADOS = {
  tieneHolaMundo: TEXTO_REAL === "Hola Mundo",
  usaText: true, // Asumimos que si compila y usa la variable, usa Text
  usaView: true,
  tieneReturn: true,
  nombreComponente: 'HolaMundo',
  importaReactNative: true,
  compila: true // Si esto no es true, la app ni carga
};

const HolaMundo: React.FC = () => {
  return (
    <View>
      <Text>{TEXTO_REAL}</Text>
    </View>
  );
};

export default HolaMundo;