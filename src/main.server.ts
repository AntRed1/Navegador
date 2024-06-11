import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component'; // Se ajusta la ruta de importación del componente
import { config } from './components/app/app.config.server'; // Se ajusta la ruta de importación del archivo de configuración del servidor

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
