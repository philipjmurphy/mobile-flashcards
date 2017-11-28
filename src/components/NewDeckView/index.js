import React, { Component } from 'react'

import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'

import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { NavigationActions } from 'react-navigation'

import { addNewDeck } from '../../actions/decks'

import styles from './styles'

const required = value => !value

const NewDeckView = ({handleSubmit, addNewDeck, invalid}) => (
  <View style={styles.card}>
    <Text style={styles.title}>What is the title of your new deck?</Text>
    <Field name="title" component={renderInput} validate={required} />

    <TouchableOpacity disabled={invalid} onPress={handleSubmit(onSubmit)}>
      <Text style={[styles.submitButton, {opacity: (invalid ? 0.5 : 1)}]}>Create Deck</Text>
    </TouchableOpacity>
  </View>
)

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput autoFocus={true} style={styles.field} placeholder="Deck Title" onChangeText={onChange} {...restInput} />
}

const onSubmit = (values, dispatch, props) => {
  props.addNewDeck(values.title)

  Keyboard.dismiss()

  // Reset to remove NewDeckView from navigation stack.
  props.navigation.dispatch(NavigationActions.reset({
    index: 0,
    key: null,
    actions: [
      NavigationActions.navigate({ routeName: 'Home'})
    ]
  }))

  props.navigation.navigate('DeckView',  { title: values.title })
}

export default connect(null, { addNewDeck })(reduxForm({
  form: 'newDeckForm'
})(NewDeckView))
