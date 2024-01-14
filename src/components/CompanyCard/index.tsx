import React from 'react'
import {
  CompanyCardContainer,
  CompanyCardContent,
  CompanyCardImage,
  CompanyCardLocation,
  CompanyCardTime,
  CompanyCardTitle
} from './style'

const CompanyCard: React.FC = () => (
  <CompanyCardContainer>
    <CompanyCardImage>
      <img
        height="100%"
        width="100%"
        src="/companies/bit_pagg_logo.png"
        alt="BitTech"
      />
    </CompanyCardImage>
    <CompanyCardContent>
      <CompanyCardTitle>
        Bit Tech - Revolucionando o mercado de seguros
      </CompanyCardTitle>
      <CompanyCardTime>
        jun. de 2022 - até o momento <br />
        Desenvolvedor Back-End
      </CompanyCardTime>
      <CompanyCardLocation>Araxá - MG</CompanyCardLocation>
    </CompanyCardContent>
  </CompanyCardContainer>
)

export default CompanyCard
