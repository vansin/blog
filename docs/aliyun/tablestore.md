# 表格存储


## 多元存储search函数（通用）
```py

    def search(
            self,
            limit=100,
            next_token_str='',
            **listQuery
    ):
        '''

        :param limit:
        :param next_token_str:
        :param listQuery:
        :keyword exam_id: dict类型 {is_use, type, value}
        :return:
        '''
        recover_next_token = next_token_str.encode('utf-8')
        must_queries = []
        for column_name, column_dict in listQuery.items():
            # 遍历所有的查询条件
            if isinstance(column_dict, (dict)):
                if column_dict['is_use']:
                    # 如果用户选中了此筛选条件
                    if column_dict['type'] == 'TermQuery':
                        must_queries.append(TermQuery(column_name, column_dict['value']))
                    if column_dict['type'] == 'WildcardQuery':
                        must_queries.append(WildcardQuery(column_name,'*'+column_dict['value']+'*'))
                    if column_dict['type'] == 'PrefixQuery':
                        must_queries.append(PrefixQuery(column_name, column_dict['value']))


        bool_query = BoolQuery(
            must_queries=must_queries
        )

        if next_token_str != '':
            # 第2此进行搜索查询
            SearchQueryInstance = SearchQuery(bool_query,
                            next_token=recover_next_token,
                            limit=limit,
                            get_total_count=True)
        else:
            # 首次进行搜索查询
            SearchQueryInstance = SearchQuery(bool_query,
                            next_token=recover_next_token,
                            # sort=Sort(sorters=[FieldSort('create_time',SortOrder.DESC)]),
                            limit=limit,
                            get_total_count=True)
        search_response = self.__OTSClientInstance__.search(
            self._table_name_, self._init_index_,
            SearchQueryInstance,
            ColumnsToGet(return_type=ColumnReturnType.ALL)
        )
        rows = search_response.rows
        next_token = search_response.next_token
        total_count = search_response.total_count
        return_rows = []
        for s_row in rows:
            s_row = table_store_row_to_dict(s_row)
            for key, value in s_row.items():
                if key.endswith('_json'):
                    s_row[key] = json.loads(value)
            return_rows.append(s_row)
        # 解码函数
        next_token_str = next_token.decode('utf-8')
        return return_rows, next_token_str, total_count
```