import React, { useState, useEffect} from 'react';
import { FlatList, Text, View } from 'react-native';

export default function ShowData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
            const response = await fetch('https://opendata.zoneatlas.com/oulu/objects.json');
            const data = await response.json();
            setData(data);
          } catch(error) {
              console.error('Error fetching data:', error);
          }
    };    
    fetchData();
    }, []);

    const categoriesPuutJaKasvit = data.filter(item => item.Categories[0].title === 'Puut ja kasvit')

    const categoriesEvents = data.filter(item => item.Categories[0].title === 'Tapahtuma')

    return (
      <FlatList
        data={categoriesEvents}
        renderItem={({ item }) => (
          <FlatListItem item={item} />
        )}
      />
    )

}

const FlatListItem = ({ item }) => {
    return (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
        </View>
    )
}