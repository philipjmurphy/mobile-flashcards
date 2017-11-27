import React, { Component } from 'react'

import { View, StyleSheet, Text, Button, TextInput, TouchableOpacity, Keyboard } from 'react-native'

import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { NavigationActions } from 'react-navigation'

import { addNewDeck } from '../actions/decks'

import { Blue, White, GREY } from 'react-native-material-color'

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
  return <TextInput style={styles.field} placeholder="Deck Title" onChangeText={onChange} {...restInput} />
}

const onSubmit = (values, dispatch, props) => {
  console.log('submitting form', values)

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

const styles = StyleSheet.create({
  card: {
    margin: 8,
    padding: 16,
    backgroundColor: White
  },
  title: {
    fontSize: 20,
    color: GREY[900]
  },
  field: {
    height: 60,
    marginBottom: 16,
    paddingBottom: 8,
    fontSize: 20
  },
  submitButton: {
    alignSelf: 'flex-end',
    color: Blue,
    fontSize: 20
  }
})

const mapStateToProps = ({decks}) => ({
  decks
})

export default connect(mapStateToProps, { addNewDeck })(reduxForm({
  form: 'newDeckForm'
})(NewDeckView))
