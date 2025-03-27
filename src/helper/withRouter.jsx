import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

export function withRouter(Component) {
    return function (props) {
        const navigation = useNavigation();
        const route = useRoute();

        return <Component {...props} navigation={navigation} route={route} />;
    };
}