<template>
  <CRow>
    <CCol sm="6" lg="3">

      <CWidgetDropdown color="success" header="onlineCount" :text="$i18n.translate('dashboard.drivers_online')">

        <!-- <template #default>
          <CDropdown
            class="float-right"
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
              <CIcon name="cil-settings"/>
            </template>

            <CDropdownItem>{{ $t('dashboard.action') }}</CDropdownItem>
            <CDropdownItem>{{ $t('dashboard.another_action') }}</CDropdownItem>
            <CDropdownItem>{{ $t('dashboard.something_else_here') }}</CDropdownItem>
            <CDropdownItem disabled>{{ $t('dashboard.disabled_action') }}</CDropdownItem>

          </CDropdown>
        </template> -->

        <!-- <template #footer>
          <CChartLineSimple
            pointed
            class="px-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="primary"
            label="Members"
            labels="months"
          />
        </template> -->
      </CWidgetDropdown>

    </CCol>

    <CCol sm="6" lg="3">
      <CWidgetDropdown 
      color="secondary" 
      header="7.200" 
      :text="$i18n.translate('dashboard.drivers-offilne')"
      >
        <!-- <template #default>
          <CDropdown
            class="float-right"
            color="transparent p-0"
            placement="bottom-end"
            :caret="false"
          >
            <template #toggler-content>
              <CIcon name="cil-location-pin"/>
            </template>
            <CDropdownItem>{{ $t('dashboard.action') }}</CDropdownItem>
            <CDropdownItem>{{ $t('dashboard.another_action') }}</CDropdownItem>
            <CDropdownItem>{{ $t('dashboard.something_else_here') }}</CDropdownItem>
            <CDropdownItem disabled>{{ $t('dashboard.disabled_action') }}</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="px-3"
            style="height:70px"
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="Members"
            labels="months"
          />
        </template> -->
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="primary"
        header="10.000"
        :text="$i18n.translate('dashboard.all-drivers')"
      >
        <!-- <template #default>
          <CDropdown
            class="float-right"
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
              <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>{{ $t('dashboard.action') }}</CDropdownItem>
            <CDropdownItem>{{ $t('dashboard.another_action') }}</CDropdownItem>
            <CDropdownItem>{{ $t('dashboard.something_else_here') }}</CDropdownItem>
            <CDropdownItem disabled>{{ $t('dashboard.disabled_action') }}</CDropdownItem>
          </CDropdown>
        </template>
        <template #footer>
          <CChartLineSimple
            style="height:70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template> -->
      </CWidgetDropdown>
    </CCol>

    <!-- <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="gradient-danger"
        header="9.823"
        :text="$i18n.translate('dashboard.members_online')"
      >
        <template #default>
          <CDropdown
            class="float-right"
            color="transparent p-0"
            placement="bottom-end"
          >
            <template #toggler-content>
             <CIcon name="cil-settings"/>
            </template>
            <CDropdownItem>{{ $t('dashboard.action') }}</CDropdownItem>
            <CDropdownItem>{{ $t('dashboard.another_action') }}</CDropdownItem>
            <CDropdownItem>{{ $t('dashboard.something_else_here') }}</CDropdownItem>
            <CDropdownItem disabled>{{ $t('dashboard.disabled_action') }}</CDropdownItem>
          </CDropdown>
        </template>

        <template #footer>
          <CChartBarSimple
            style="height:70px"
            background-color="rgb(250, 152, 152)"
            label="Members"
            labels="months"
          />
        </template>

      </CWidgetDropdown>
    </CCol> -->
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'

export default {
  name: 'WidgetsDropdown',
  components: { CChartLineSimple, CChartBarSimple }
}
</script>
