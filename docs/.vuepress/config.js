module.exports = {
    title: 'Desarrollo de Aplicaciones 2021',
    dest: 'public',
    base: '/CGS2021/',
    themeConfig: {
        nav: [
          { text: 'Inicio', link: '/' }
        ],
        sidebar: {

          '/AntipatronesComunes/':[''],

          '/BeneficiosDespliegue/':[''],
          
          '/PrincipiosDespliegue/':[''],

          '/GestionConfiguracion/':[
            ['ControlVersiones/','Control de versiones'],
            ['Configuracion','...']
          ],
      
        }

    }
}