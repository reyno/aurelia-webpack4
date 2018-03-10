import {
    Aurelia,
    PLATFORM
} from 'aurelia-framework';

export async function configure(aurelia: Aurelia) {


    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .globalResources([
            PLATFORM.moduleName("components/my-component", "components")
        ])
        ;

    await aurelia.start();

    aurelia.setRoot(PLATFORM.moduleName("app"));

}