import type { FC } from 'react'
import { ExerciseFilterContainer, ExerciseFilterContent, ItemPerPage, ItemPerPageContainer, SelectContainer, StyledExerciseFilter } from './ExerciseFilter.styles'
import type { ExerciseFilterProps } from './index.d'
import { useGetBodyPartQuery, useGetEquipmentQuery } from '../Exercise.services'
import Loading from 'components/Loading'
import { Button } from 'components/Button'
import { Select } from 'components/Select'

const ExerciseFilter: FC<ExerciseFilterProps> = ({
	pageOption,
	itemPerPage,
	onChaageItemPerPage,
	disabledFilterButton = false,
	onChangeBodyPart,
	onChangeEquipment,
	hanldeFilterButton,
	bodyPart,
	equipment,
}) => {
	const { data: bodyPartList, isFetching: isFetchingBodyPartList } = useGetBodyPartQuery(null)
	const { data: equipemntList, isFetching: isFetchingEquipmentList } = useGetEquipmentQuery(null)

	const isFetching = isFetchingBodyPartList && isFetchingEquipmentList


	const isDisabled = isFetching || disabledFilterButton

	const bodyPartOptions = bodyPartList?.map(item => ({ label: item.title, value: item.title }))
	const equipmentOptions = equipemntList?.map(item => ({ label: item.title, value: item.title }))

	const bodyPartValue = bodyPartOptions?.find(r => r.value === bodyPart)
	const equipmentValue = equipmentOptions?.find(r => r.value === equipment)

	return (
		<StyledExerciseFilter>
			<p>Filters:</p>
			<ExerciseFilterContainer>

				<ExerciseFilterContent>

					{isFetching && <Loading size='xSmall' />}

					<SelectContainer>
						<p>Body Parts:</p>

						<Select
							name='bodyPart'
							placeholder='Body Part'
							value={bodyPartValue}
							onChange={onChangeBodyPart}
							options={bodyPartOptions}
							isLoading={isFetchingBodyPartList}
							isClearable
							isSearchable
						/>
					</SelectContainer>

					<SelectContainer>
						<p>Equipment</p>

						<Select
							name='equipment'
							placeholder='Equipment'
							value={equipmentValue}
							onChange={onChangeEquipment}
							options={equipmentOptions}
							isLoading={isFetchingEquipmentList}
							isClearable
							isSearchable
						/>
					</SelectContainer>

					<div>
						<Button
							disabled={isDisabled}
							onClick={hanldeFilterButton}
						>
							Filter
						</Button>
					</div>
				</ExerciseFilterContent>

				<ItemPerPageContainer>
					<ItemPerPage>
						{pageOption && <Select
							placeholder='Size'
							defaultValue={{ label: itemPerPage, value: itemPerPage }}
							onChange={onChaageItemPerPage}
							options={pageOption?.map(item => ({ label: item, value: item }))}
						/>}
					</ItemPerPage>
				</ItemPerPageContainer>

			</ExerciseFilterContainer>
		</StyledExerciseFilter>
	)
}

export default ExerciseFilter
