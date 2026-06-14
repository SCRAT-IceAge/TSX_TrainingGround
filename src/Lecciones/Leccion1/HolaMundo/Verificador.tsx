import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Importamos el componente Y sus resultados
import Archivo, { RESULTADOS } from './Archivo';

export default function Verificador() {
  // Definimos el orden de las preguntas
  const preguntas = [
    { key: 'tieneHolaMundo', label: '1. Contiene "Hola Mundo"?' },
    { key: 'usaText', label: '2. "Hola Mundo" está en <Text>?' },
    { key: 'usaView', label: '3. <Text> está en <View>?' },
    { key: 'tieneReturn', label: '4. <View> está en return()?' },
    { key: 'nombreComponente', label: '5. Es parte de React.FC "HolaMundo"?', esBoolean: false, valorEsperado: 'HolaMundo' },
    { key: 'importaReactNative', label: '6. Importa Text y View?' },
    { key: 'compila', label: '7. Compila correctamente?' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Checklist de Archivo</Text>
      
      {preguntas.map((p, index) => {
        // Obtenemos el valor real del archivo
        const valorReal = RESULTADOS[p.key as keyof typeof RESULTADOS];
        
        // Determinamos si es OK
        let esOk = false;
        if (typeof valorReal === 'boolean') {
          esOk = valorReal === true;
        } else if (p.esBoolean === false && p.valorEsperado) {
          esOk = valorReal === p.valorEsperado;
        }

        return (
          <View key={index} style={styles.item}>
            <Text style={styles.icon}>{esOk ? '✅' : '❌'}</Text>
            <Text style={[styles.text, !esOk && styles.error]}>{p.label}</Text>
          </View>
        );
      })}

      <View style={styles.separator} />
      
      <Text style={styles.previewLabel}>Vista Previa:</Text>
      <View style={styles.previewBox}>
        <Archivo />
      </View>

      <View style={styles.final}>
        <Text style={styles.finalText}>
          {Object.values(RESULTADOS).every(v => v === true || v === 'HolaMundo') 
            ? '🎉 ¡Todo correcto!' 
            : '❌ NOOOO'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { flexDirection: 'row', alignItems: 'center', marginBottom: 12, width: '100%' },
  icon: { fontSize: 20, marginRight: 15, width: 25, textAlign: 'center' },
  text: { fontSize: 16, flex: 1 },
  error: { color: 'red', fontWeight: 'bold' },
  separator: { height: 1, backgroundColor: '#ddd', width: '100%', marginVertical: 20 },
  previewLabel: { fontSize: 16, fontWeight: '600', marginBottom: 10, alignSelf: 'flex-start' },
  previewBox: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8, width: '100%', alignItems: 'center', marginBottom: 20 },
  final: { marginTop: 10, padding: 15, borderRadius: 8, backgroundColor: '#fff', width: '100%', alignItems: 'center' },
  finalText: { fontSize: 18, fontWeight: 'bold' },
});