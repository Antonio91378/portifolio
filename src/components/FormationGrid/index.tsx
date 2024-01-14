import React from 'react'
import FormationCard from '../Formationcard'
import { FormationGridContainer } from './style'

const FormationGrid: React.FC = () => (
  <FormationGridContainer>
    <FormationCard
      company="CEFET-MG"
      format=".png"
      title="CEFET-MG"
      time="jan. de 2018 - 2024"
      description={`O <span class="go">Centro Federal de Educação Tecnológica de Minas Gerais (CEFET-MG)</span> é um <span class="empashis">autarquia federal brasileira</span>, vinculada ao Ministério da Educação, que oferece ensino médio, cursos técnicos, superiores, pós stricto sensu e lato sensu, contemplando também, de forma indissociada, o ensino, a pesquisa e a extensão, na área tecnológica e no âmbito da pesquisa aplicada.`}
    />
    <FormationCard
      company="ifnmg"
      format=".png"
      title="Insituto Federal do Norte de Minas Gerais"
      time="jan. de 2015 - 2017"
      description={`Os <span class="go">Institutos Federais</span> são <strong class="empashis">instituições</strong> de educação básica, profissional e superior publicas federais brasileiras. Os institutos federais compõem a Rede Federal de Educação Profissional, Científica e Tecnológica.`}
    />
  </FormationGridContainer>
)

export default FormationGrid
