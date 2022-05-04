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
      description={`O <span class="go">Técnico de Nível Médio em Meio Ambiente</span> é o <strong class="empashis">profissional</strong> direcionado para atividades de gestão ambiental, aplicação da legislação e das políticas ambientais, controle analítico para o monitoramento dos ecossistemas locais e desenvolvimento de tecnologias sustentáveis, processos produtivos e saúde coletiva.`}
    />
  </FormationGridContainer>
)

export default FormationGrid
