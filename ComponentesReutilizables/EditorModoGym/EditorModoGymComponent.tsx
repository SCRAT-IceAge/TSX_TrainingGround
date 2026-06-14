import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

const ComponenteEditorDeTexto: React.FC = () => {
	const [texto,setTexto] = useState("");
	return (
		<View>
			<TextInput
				value={texto}
				onChangeText={setTexto}
				multiline={true}
				placeholder="Pulsa Enter aquí..."
			/>
		</View>
	)
}

export default ComponenteEditorDeTexto