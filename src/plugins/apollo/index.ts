import type { App } from 'vue'
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from '@/queries/client'


export default function (app: App) {
    app.provide(DefaultApolloClient, apolloClient);

}
