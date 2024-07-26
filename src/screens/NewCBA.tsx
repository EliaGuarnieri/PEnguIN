import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { StyleSheet, View } from 'react-native';

import RadioList from '@/components/FormInputTypes/RadioList';
import FormList from '@/components/FormStructure/FormList';
import { theme } from '@/theme/theme';
import { FormInputCba, Step } from '@/types/formtypes';
import { RootStackScreenProps } from '@/types/navigation';

export const cbaSteps: Step<FormInputCba>[] = [
  {
    id: 1,
    title: 'Mi sono turbato per cose di poco conto',
    component: RadioList,
    name: 'question1',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 2,
    title: 'Ho dormito bene e mi sono svegliato riposato',
    component: RadioList,
    name: 'question2',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 3,
    title: 'Ho provato fastidio quando la gente parlava di me',
    component: RadioList,
    name: 'question3',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 4,
    title: 'Mi sono goduto la vita',
    component: RadioList,
    name: 'question4',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 5,
    title: 'Ho sentito l’impulso a colpire o a far male a qualcuno',
    component: RadioList,
    name: 'question5',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 6,
    title: 'Tutto mi è sembrato assurdo, irreale',
    component: RadioList,
    name: 'question6',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 7,
    title: 'La vita merita di essere vissuta',
    component: RadioList,
    name: 'question7',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 8,
    title: 'Mi è piaciuto fare qualcosa di pericoloso',
    component: RadioList,
    name: 'question8',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 9,
    title: 'Mi è capitato di bere troppo e di ubriacarmi',
    component: RadioList,
    name: 'question9',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 10,
    title: 'Sono stato sul punto di piangere',
    component: RadioList,
    name: 'question10',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 11,
    title: 'Ho gustato il sapore dei cibi',
    component: RadioList,
    name: 'question11',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 12,
    title: 'Sono stato preoccupato per possibili disgrazie',
    component: RadioList,
    name: 'question12',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 13,
    title: 'Mi è pesato prendere qualsiasi decisione',
    component: RadioList,
    name: 'question13',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 14,
    title: 'Stare solo mi ha fatto paura',
    component: RadioList,
    name: 'question14',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 15,
    title: 'Ho avuto momenti di rabbia',
    component: RadioList,
    name: 'question15',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 16,
    title: 'Vedevo possibilità di soluzione ai miei problemi',
    component: RadioList,
    name: 'question16',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 17,
    title: 'Sono stato tormentato dai sensi di colpa',
    component: RadioList,
    name: 'question17',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 18,
    title: 'Ho sentito un nodo alla gola',
    component: RadioList,
    name: 'question18',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 19,
    title: 'Tutto mi è sembrato senza scopo',
    component: RadioList,
    name: 'question19',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 20,
    title: 'Mi è venuto da prendere a calci o a schiaffi qualcuno',
    component: RadioList,
    name: 'question20',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 21,
    title: 'Sono riuscito a parlare con gli altri',
    component: RadioList,
    name: 'question21',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 22,
    title: 'Ho fatto cose che mi hanno interessato e coinvolto',
    component: RadioList,
    name: 'question22',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 23,
    title: 'Mi sono preoccupato per cose di poca importanza',
    component: RadioList,
    name: 'question23',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 24,
    title: 'Ho perso il controllo di me stesso',
    component: RadioList,
    name: 'question24',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 25,
    title: 'Avrei voluto essere morto',
    component: RadioList,
    name: 'question25',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 26,
    title: 'Mi è successo di lamentarmi',
    component: RadioList,
    name: 'question26',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 27,
    title: 'Ho cercato di affrontare le difficoltà anziché evitarle',
    component: RadioList,
    name: 'question27',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 28,
    title: 'Ho fatto cose che mi hanno dato soddisfazione',
    component: RadioList,
    name: 'question28',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 29,
    title: 'Ho capito che qualcosa non funziona nella mia testa',
    component: RadioList,
    name: 'question29',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 30,
    title: 'Qualcuno mi ha aiutato a risolvere i miei problemi personali',
    component: RadioList,
    name: 'question30',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 31,
    title: 'Pensieri di scarsa importanza mi hanno infastidito',
    component: RadioList,
    name: 'question31',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 32,
    title: 'Avrei voluto avere il coraggio di togliermi la vita',
    component: RadioList,
    name: 'question32',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 33,
    title: 'Mi sono abbuffato di cibo',
    component: RadioList,
    name: 'question33',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 34,
    title: 'Ho fatto sogni spaventosi',
    component: RadioList,
    name: 'question34',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 35,
    title: 'Mi sono irritato',
    component: RadioList,
    name: 'question35',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 36,
    title: 'Ho pensato cose molto brutte, da non poterne parlare',
    component: RadioList,
    name: 'question36',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 37,
    title: 'Il futuro mi riserva qualcosa di buono',
    component: RadioList,
    name: 'question37',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 38,
    title: 'Alla mattina mi sono sentito fiacco e senza forze',
    component: RadioList,
    name: 'question38',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 39,
    title: 'Sono stato sul punto di fare del male a me stesso',
    component: RadioList,
    name: 'question39',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 40,
    title: 'Sono soddisfatto degli obiettivi che ho raggiunto o che sto per raggiungere',
    component: RadioList,
    name: 'question40',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 41,
    title: 'In forma',
    component: RadioList,
    name: 'question41',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 42,
    title: 'Allegro e spensierato',
    component: RadioList,
    name: 'question42',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 43,
    title: 'Aiutato dagli altri',
    component: RadioList,
    name: 'question43',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 44,
    title: 'Calmo',
    component: RadioList,
    name: 'question44',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 45,
    title: 'Turbato',
    component: RadioList,
    name: 'question45',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 46,
    title: 'Agitato',
    component: RadioList,
    name: 'question46',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 47,
    title: 'Abbandonato',
    component: RadioList,
    name: 'question47',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 48,
    title: 'Svalutato o preso in giro',
    component: RadioList,
    name: 'question48',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 49,
    title: 'Stanco senza motivo',
    component: RadioList,
    name: 'question49',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 50,
    title: 'Tranquillo',
    component: RadioList,
    name: 'question50',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 51,
    title: 'Sicuro di me',
    component: RadioList,
    name: 'question51',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 52,
    title: 'Giù',
    component: RadioList,
    name: 'question52',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 53,
    title: 'Capito dagli altri',
    component: RadioList,
    name: 'question53',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 54,
    title: 'Ansioso',
    component: RadioList,
    name: 'question54',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 55,
    title: 'Contento',
    component: RadioList,
    name: 'question55',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 56,
    title: 'Contento',
    component: RadioList,
    name: 'question56',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 57,
    title: 'Nervoso',
    component: RadioList,
    name: 'question57',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 58,
    title: 'Travolgere dalle difficoltà',
    component: RadioList,
    name: 'question58',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 59,
    title: 'Riposato',
    component: RadioList,
    name: 'question59',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 60,
    title: 'In grado di reagire anche a difficoltà e fallimenti',
    component: RadioList,
    name: 'question60',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 61,
    title: 'Depresso',
    component: RadioList,
    name: 'question61',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 62,
    title: 'Respinto o rifiutato dagli altri',
    component: RadioList,
    name: 'question62',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 63,
    title: 'Rilassato',
    component: RadioList,
    name: 'question63',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 64,
    title: 'Teso',
    component: RadioList,
    name: 'question64',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 65,
    title: 'Di peso agli altri',
    component: RadioList,
    name: 'question65',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 66,
    title: 'Solo',
    component: RadioList,
    name: 'question66',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 67,
    title: 'Preoccupazioni',
    component: RadioList,
    name: 'question67',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 68,
    title: 'Delle delusioni che non riesco a togliermi dalla testa',
    component: RadioList,
    name: 'question68',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 69,
    title: 'Difficoltà ad addormentarmi',
    component: RadioList,
    name: 'question69',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 70,
    title: "Sbalzi d'umore",
    component: RadioList,
    name: 'question71',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 71,
    title: 'La sensazione che il peggio fosse ormai superato',
    component: RadioList,
    name: 'question71',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 72,
    title: 'Difficoltà a concentrarmi',
    component: RadioList,
    name: 'question72',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 73,
    title: 'Momenti di panico',
    component: RadioList,
    name: 'question73',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 74,
    title: 'La sensazione di non poterne proprio più',
    component: RadioList,
    name: 'question74',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 75,
    title: 'Sensi di vuoto o confusione alla testa',
    component: RadioList,
    name: 'question75',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 76,
    title: 'Interesse per il sesso',
    component: RadioList,
    name: 'question76',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 77,
    title: 'La percezione che qualcuno controllasse i miei pensieri',
    component: RadioList,
    name: 'question77',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 78,
    title: 'Appetito',
    component: RadioList,
    name: 'question78',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 79,
    title: 'Sensazioni di peso e stretta allo stomaco',
    component: RadioList,
    name: 'question79',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
  {
    id: 80,
    title: 'Fiducia in me stesso',
    component: RadioList,
    name: 'question80',
    options: ['Per nulla', 'Poco', 'Abbastanza', 'Molto', 'Moltissimo'],
    color: theme.colors.palepink,
  },
];

const NewCba = () => {
  const navigation = useNavigation<RootStackScreenProps<'NewCba'>['navigation']>();

  const methods = useForm<FormInputCba>({
    reValidateMode: 'onChange',
    defaultValues: {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
      question8: '',
      question9: '',
      question10: '',
      question11: '',
      question12: '',
      question13: '',
      question14: '',
      question15: '',
      question16: '',
      question17: '',
      question18: '',
      question19: '',
      question20: '',
      question21: '',
      question22: '',
      question23: '',
      question24: '',
      question25: '',
      question26: '',
      question27: '',
      question28: '',
      question29: '',
      question30: '',
      question31: '',
      question32: '',
      question33: '',
      question34: '',
      question35: '',
      question36: '',
      question37: '',
      question38: '',
      question39: '',
      question40: '',
      question41: '',
      question42: '',
      question43: '',
      question44: '',
      question45: '',
      question46: '',
      question47: '',
      question48: '',
      question49: '',
      question50: '',
      question51: '',
      question52: '',
      question53: '',
      question54: '',
      question55: '',
      question56: '',
      question57: '',
      question58: '',
      question59: '',
      question60: '',
      question61: '',
      question62: '',
      question63: '',
      question64: '',
      question65: '',
      question66: '',
      question67: '',
      question68: '',
      question69: '',
      question70: '',
      question71: '',
      question72: '',
      question73: '',
      question74: '',
      question75: '',
      question76: '',
      question77: '',
      question78: '',
      question79: '',
      question80: '',
    },
  });

  const navTo = () => navigation.navigate('SuccesScreenCBA');

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <FormList<FormInputCba>
          steps={cbaSteps}
          navTo={navTo}
          name="CBA"
          scrollingEnabled={false}
        />
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.palepink,
  },
});

export default NewCba;
