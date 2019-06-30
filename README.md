# helperStyles
Utility class names for react native projects



## Why do I need this?

For faster writing styles in RN projects, you need this. Here is why:
- **Familiar classes:** if you know css, you are almost done. Class names are written in such way, you don’t find any headache to remember. Yes there is pattern.
- **Less cognitive load:** Ever tired of thinking about new class names, it is for you. it is basically works like inline styles.
- **Flow in coding:** Once you get used to with class names, you don’t have to move to other lines of page or jump to other pages.


## How can I use this?

__Step1 : Import__

```
import React from 'react';
import {View,Text} from 'react-native';
import styles from '../../../../../styles';import styles from '_ _ ..file path.._ _';
```

__Step2 : Load__

```
 <View style={[styles.py2, styles.border, styles.borderBlack, styles.row]}>
	<View style={styles.flex1}>
		<Text style={styles.colorGreyDarkest}>FROM</Text>
		<Text style={[styles.colorGreyDarker, styles.font24]}>
			{moment(start_date).format('hh:mm a')}
		</Text>
	</View>
	<View style={styles.flex1}>
		<Text style={styles.colorGreyDarkest}>TO</Text>
		<Text style={[styles.colorGreyDarker, styles.font24, styles.uppercase]}>
			{moment(end_date).format('hh:mm a')}
		</Text>
	</View>
</View>
```

Note: You can use shorter form of ``styles.`` for faster type.
