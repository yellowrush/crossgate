<template>
    <div id="comment"></div>
</template>

<script>
export default {
    name: 'Utterances',
    methods: {
        initValine() {
            let utterances = window.document.createElement('script')
            utterances.type = 'text/javascript'
            utterances.async = true
            utterances.setAttribute('issue-term', 'pathname')
            utterances.setAttribute('theme', 'github-dark')
            utterances.setAttribute('repo', 'crossgate-book/crossgate-book.github.io')
            utterances.crossorigin = 'anonymous'
            utterances.src = 'https://beaudar.lipk.org/client.js'
            window.document.getElementById('comment').appendChild(utterances)
        }
    },
    mounted() {
        this.initValine()
    }
}
</script>

<style>


.utterances {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
}

.utterances-frame {
    position: absolute;
    left: 0;
    right: 0;
    width: 1px;
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    border: 0;
}
</style>