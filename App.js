import React from 'react';
import { View, StyleSheet, Text, Image} from 'react-native';
import Container from './components/Container';
import Greeting from './components/Greeting';
import Header from './components/Header';
import LastUpdateGlobal from './components/LastUpdateGlobal';
import TextBody from './components/TextBody';
import TextSubBody from './components/TextSubBody';
import Global from './components/Global';
import LastUpdate from './components/LastUpdate';
import DataIndonesia from './components/DataIndonesia';
import CovidIndonesia from './components/CovidIndonesia';
const App = () => {
  return (
    <View style={styles.container}>
      <Container>
        <View style={styles.boxHeader}>
          <Header/>
        </View>
        <View style={styles.boxSub}>
            <Greeting/>
            <Global/>
            <LastUpdateGlobal/>
            <TextBody/>
            <DataIndonesia/>
            <LastUpdate/>
          <Text style={styles.textStyle}> TIPS PENCEGAHAN UNTUK MENGURANGI RISIKO TERTULAR VIRUS CORONA </Text>
          <Text style={styles.textStyle2}>1. Sering cuci tangan pakai sabun dan air mengalir minimal 20 detik
                                            dan ingatkan anak untuk mencuci
                                            tangan pakai sabun secara benar.
                                            (Gunakan cara mudah mengukur
                                            durasi 20 detik semisal menyanyi
                                            lagu Selamat Ulang Tahun 2x)
          </Text>
          <Image
                source={{ uri: 'https://cdn4.iconfinder.com/data/icons/healthy-life-line-color-live-long-and-prosper/512/Hand_washing-512.png'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />
          <Text style={styles.textStyle2}> 2. Cuci tangan pakai sabun saat:
                                          • tiba di rumah, tempat kerja
                                          atau sekolah,
                                          • sebelum makan,
                                          • sebelum menyiapkan
                                          makanan, dan
                                          • setelah menggunakan toilet
          </Text>
          <Image
                source={{ uri: 'https://www.netclipart.com/pp/m/8-88362_hand-washing-free-commercial-all-photo-png-wash.png'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />
          <Text style={styles.textStyle2}> 3. Gunakan cairan
                                              pembersih tangan
                                              (minimal 60% alkohol)
                                              bila sabun dan air mengalir tidak
                                              tersedia
          </Text>
          <Image
                source={{ uri: 'https://cdn.iconscout.com/icon/free/png-512/hand-sanitiser-2199815-1833394.png'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />
          <Text style={styles.textStyle2}>4. Tutup mulut dan hidung dengan siku terlipat saat batuk atau bersin
                                            atau gunakan tisu, yang langsung
                                            dibuang ke tempat sampah tertutup
                                            setelah digunakan. Sesudah itu, cuci
                                            tangan dengan sabun dan air mengalir
                                            atau cairan pembersih tangan.
          </Text>
          <Image
                source={{ uri: 'https://www.cnnindonesia.com/longform/gaya-hidup/20200313/laporan-mendalam-rumus-melawan-virus/assets/img/graphics/graph_5.png'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />
          <Text style={styles.textStyle2}>5. Jaga jarak dengan orang yang tidak sehat dan juga hindari menyentuh wajah
          </Text>
          <Image
                source={{ uri: 'https://www.cnnindonesia.com/longform/gaya-hidup/20200313/laporan-mendalam-rumus-melawan-virus/assets/img/graphics/graph_4.png'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />
            <Image
                source={{ uri: 'https://www.hartmann.info/-/media/corporate-news/img/icoon_abstandhalten.png?la=en-CORP&h=501&w=499&mw=740&hash=2EF4C466ACBB629F4C96A73F12B2E8FCC2B8FB47'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />
          <Text style={styles.textStyle2}>6.Hindari bersalaman dan sebagai pengganti bisa melakukan dengan cara lambaikan tangan, salam siku atau beri senyum
          </Text>
          <Image
                source={{ uri: 'https://i1.wp.com/www.takatik.com/wp-content/uploads/2017/10/Sampul.png?resize=710%2C434&ssl=1'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />
            <Text style={styles.textStyle}> Terima Kasih kepada dokter dan para medis yang berada pada garis depan
                                            untuk menghadapi virus covid-19!
            </Text>
            <Image
                source={{ uri: 'https://static-contributor-fp.cdnpk.net/img/campaigns/covid/main.png'}}
                style={{resizeMode: 'contain', width: 100, height: 100}}
            />
            <Text style={styles.textStyle3}>  ©Yohanes Septiawan </Text>
            <Text style={styles.textStyle3}> Source: https://covid19.go.id/ </Text>
        </View>
        </Container>
        <View style={styles.boxBody}>
          <TextSubBody/>
          <CovidIndonesia/>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#EBEBEB',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  boxHeader: {
      
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxSub: {
      flex: 2,
      alignItems: 'center',
  },
  boxBody: {
    flex: 3
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'sans-serif-light'
  },
  textStyle2: {
    fontSize: 15,
    fontFamily:'sans-serif-light'
  },
  textStyle3: {
    fontSize: 10,
    fontFamily:'sans-serif-light',
    alignItems: 'center'
  }

})

export default App;