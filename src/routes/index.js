import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "../pages/Home";
import Component from "../pages/Component";
import FlatList from "../pages/FlatList";
import Image from "../pages/Image";
import CounterClass from "../pages/Counter";
import CounterFunctional from "../pages/CounterFunctional";
import Color from "../pages/Color";
import MakingColor from "../pages/MakingColor";
import NewMakingColor from "../pages/NewMakingColor";
import ReducerMakingColor from "../pages/ReducerMakingColor";

const AppNavigator = createStackNavigator(
  {
    Home,
    Component,
    FlatList,
    Image,
    CounterClass,
    CounterFunctional,
    Color,
    MakingColor,
    NewMakingColor,
    ReducerMakingColor
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "APP"
    }
  }
);

export default createAppContainer(AppNavigator);
